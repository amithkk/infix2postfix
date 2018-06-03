import React, {Component} from 'react';
import Infixinput from './components/Infixinput';
import BootstrapTable from 'react-bootstrap-table-next';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            posTable: [],
            isValidExp: true,
            result: ''
        };
    }


    infixToPostfix = expression => {
        expression = expression.replace(/\s/g, '');
        console.log(expression);
        let result = '';
        let stack = [];
        //does this work
        let operators = ['$', '*', '/', '+', '-'];
        let resTable = [];
        let tokens = expression.split('');
        let isValid = !/[^()+\-*$/0-9A-Za-z.\s]/gi.test(expression);
        this.setState({isValidExp: isValid});
        if (Array.isArray(tokens) && isValid) {
            for (let i = 0; i < tokens.length; i++) {
                let token = tokens[i];

                if (operators.indexOf(token) > -1) {
                    while (
                        stack.length &&
                        operators.indexOf(stack[stack.length - 1]) > -1
                        ) {
                        let operator = stack.pop();
                        result += ' ' + operator;
                    }

                    stack.push(token);
                } else if (token === '(') {
                    stack.push(token);
                } else if (token === ')') {
                    let item = stack.pop();

                    while (item !== '(') {
                        result += ' ' + item;
                        item = stack.pop();
                    }
                } else if (token) {
                    result += ' ' + token;
                }
                console.log(
                    'current char: ',
                    token,
                    'Stack:',
                    stack.join(' '),
                    'Result:',
                    result
                );
                resTable.push({
                    id: i,
                    curChar: token,
                    curStack: stack.join(' '),
                    curResult: result
                });
            }
        }

        while (stack.length) {
            let item = stack.pop();
            result += ' ' + item;
        }

        result = result.trim();
        console.log(result);
        this.setState({posTable: resTable, result: result});
        console.log(this.state.posTable);
    };

    onConvertAction = event => {
        event.preventDefault();
        this.infixToPostfix(document.getElementById('infix_inp').value);
    };

    render() {
        let resultText = '';
        if (!this.state.isValidExp)
            resultText = 'Invalid Infix Expression, Use Only (+,-,*,/,$)';
        else if (this.state.result)
            resultText = 'Result after popping any remaining elements is:';

        const columns = [
            {
                dataField: 'curChar',
                text: 'Character'
            },
            {
                dataField: 'curStack',
                text: 'Stack'
            },
            {
                dataField: 'curResult',
                text: 'Postfix Expression'
            }
        ];
        return (
            <div className="text-center">
                <h1> Infix to Postfix Converter  </h1>
                <Infixinput onConvert={this.onConvertAction}/>
                <div id="result_table" className="center">
                    <BootstrapTable
                        keyField="id"
                        data={this.state.posTable}
                        columns={columns}
                        striped
                        noDataIndication={() =>
                            'Enter a valid infix Expression and press Convert'
                        }
                    />
                </div>
                <div id="result_container">
                    {resultText}
                    {this.state.result && <div className="well">{this.state.result}</div>}
                </div>
            </div>
        );
    }
}

export default App;
