import React from 'react'
import './register.css'
function Register() {
    return (
        <div className="container h-100">
		<div className="d-flex justify-content-center h-100">
			<div className="user_card">
				<div className="d-flex justify-content-center">
					<div className="brand_logo_container">
						
					</div>
				</div>
				<div className="d-flex justify-content-center form_container">
					<form>
                    <div className="input-group mb-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input type="text" name="" className="form-control input_user" placeholder="username"/>
						</div>
						<div className="input-group mb-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-at"></i></span>
							</div>
							<input type="email" name="" className="form-control input_user" placeholder="email"/>
						</div>
						<div className="input-group mb-2">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input type="password" name="" className="form-control input_pass" placeholder="password"/>
						</div>
							<div className="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" name="button" className="btn login_btn">Signup</button>
				   </div>
					</form>
				</div>
		
				<div className="mt-4">
					
					
				</div>
			</div>
		</div>
        </div>
    )
}

export default Register
