import React, { Component } from 'react'
import Input from '../components/input'
import { withTranslation } from 'react-i18next'
import { login } from '../api/apiCalls'

class LoginPage extends Component {
	state = {
		userName: null,
		password: null,
	}

	onChangeFields = (e) => {
		const { name, value } = e.target
		this.setState({
			[name]: value,
		})
	}

	onClickLogin = (e) => {
		e.preventDefault()
		const { userName, password } = this.state
		const credentials = { userName, password }
		login(credentials)
	}

	render() {
		const { t } = this.props

		return (
			<div className='container'>
				<form>
					<h1 className='text-center'>{t('Login')}</h1>
					<Input
						type='text'
						name='userName'
						label={t('Username')}
						onChangeFields={this.onChangeFields}
					/>
					<Input
						type='password'
						name='password'
						label={t('Password')}
						onChangeFields={this.onChangeFields}
					/>
					<div className='text-center'>
						<button onClick={this.onClickLogin} className='btn btn-primary'>
							{t('Login')}
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default withTranslation()(LoginPage)
