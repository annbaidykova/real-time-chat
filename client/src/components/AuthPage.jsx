import React from 'react';
import axios from 'axios';

const AuthPage = (props) => {
	const onSubmit = (event) => {
		event.preventDefault();
		const { value } = event.target[0];
		axios
			.post(`${process.env.REACT_APP_API_URL}authenticate`, { username: value })
			.then((response) => props.onAuth({ ...response.data, secret: value }))
			.catch((error) => console.log('Auth Error', error));
	};

	return (
		<div className="background">
			<form onSubmit={onSubmit} className="form-card">
				<div className="form-title">Welcome 👋</div>

				<div className="form-subtitle">Set a username to get started</div>

				<div className="auth">
					<div className="auth-label">Username</div>
					<input className="auth-input" name="username" />
					<button className="auth-button" type="submit">
						Enter
					</button>
				</div>
			</form>
		</div>
	);
};

export default AuthPage;
