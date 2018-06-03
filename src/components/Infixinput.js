import React from 'react';
import './Infixinput.css'

const Infixinput = ({onConvert}) => {
	return(
		<div id="wrapper">
		<form className="form-inline"  onSubmit={onConvert}>
			<div className="input-group">
				<input className="form-control " id = "infix_inp" placeholder="Enter Infix Expression" />
				<span class="input-group-btn">
				<button className="btn btn-primary "> Convert </button>
				</span>
			</div>
			
		</form>
		</div>
		)
}


export default Infixinput