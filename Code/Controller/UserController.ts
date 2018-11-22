import { Auth } from 'aws-amplify';
import { bool } from 'aws-sdk/clients/signer';
import { EmailRegexString, PasswordRegexString } from '../Helpers';

class UserController {
	private Email: string;
	private EmailRegex: RegExp;
	private PasswordRegex: RegExp;

	constructor() {
		this.EmailRegex = new RegExp(EmailRegexString, 'i');
		this.PasswordRegex = new RegExp(PasswordRegexString);
	}
	

	//Post: update Email if success
	public async SignUpUser(email: string, password: string) {
		try {
			let signUpResult = await Auth.signUp({
				username: email,
				password: password,
				attributes: {
					email: email
				}
			});

			console.log(signUpResult);
			this.Email = email;
			return SignUpEnum.Success;

		} catch (error) {
			if (error.code != null) {
				switch(error.code) {
					case 'UsernameExistsException':
						return SignUpEnum.UsernameExistsException;
					case 'InvalidPasswordException':
						return SignUpEnum.InvalidPasswordException;
					default:
						return SignUpEnum.UnKnownError;
				}
			}
			return SignUpEnum.UnKnownError;
		}
	}

	public async ConfirmSignUpUser(code: string) {
		try {
			Auth.confirmSignUp(this.Email, code, {
				forceAliasCreation: true
			});

			return ConfirmSignUpEnum.Success;
		} catch (error) {
			return ConfirmSignUpEnum.UnKnownError;
		}
	}

	public async SignInUser(email: string, password: string) {
		try {
			let signInResult = await Auth.signIn(email, password);

			console.log(signInResult);
			this.Email = email;
			return SignInEnum.Success;

		} catch (error) {
			if (error.code != null) {
				switch (error.code) {
					case 'NotAuthorizedException':
						return SignInEnum.NotAuthorizedException;
					default:
						return SignInEnum.UnKnownError;
				}
			}
			return SignInEnum.UnKnownError;
		}
	}

	public CheckEmail(email: string) {
		if (email == '') {
			return EmailStateEnum.Empty;
		}
		else if (!this.EmailRegex.test(email)) {
			return EmailStateEnum.Invalid;
		}
		else if (!email.includes('@student.douglascollege.ca')) {
			return EmailStateEnum.NotSchoolEmail;
		}

		return EmailStateEnum.Valid;
	}

	public CheckPassword(password: string, confirmPassword: string = null) {
		if (password.length == 0) {
			return PasswordStateEnum.Empty;
		}
		// Todo: get password regex to work
		// else if(!this.PasswordRegex.test('helloworld123!'))
		// {
		// 	console.log(this.PasswordRegex.test(this.state.Password.trim()));
		// 	console.log(this.PasswordRegex.source);
		// 	console.log(this.PasswordRegex.exec(this.state.Password));
		// 	console.log('Password invalid');
		// 	console.log(this.state.Password);
		// 	passwordErrorMessage = 'Invalid';
		// 	isPasswordError = true;
		// }
		else if (confirmPassword != null &&  password != confirmPassword) {
			return PasswordStateEnum.NotMatch;
		}

		return PasswordStateEnum.Valid;
	}
}

export enum SignInEnum {
	Success = 'Success',
	NotAuthorizedException = 'NotAuthorizedException',
	UnKnownError = 'UnKnownError'
}

export enum SignUpEnum {
	Success = 'Success',
	UsernameExistsException = 'UsernameExistsException',
	InvalidPasswordException = 'InvalidPasswordException',
	UnKnownError = 'UnKnownError'
}

export enum ConfirmSignUpEnum {
	Success = 'Success',
	UnKnownError = 'UnKnownError'
}

export enum EmailStateEnum {
	Empty = 'Empty',
	Invalid = 'Invalid',
	Valid = 'Valid',
	NotSchoolEmail = 'NotSchoolEmail'
}

export enum PasswordStateEnum {
	Empty = 'Empty',
	Invalid = 'Invalid',
	Valid = 'Valid',
	NotMatch = 'NotMatch'
}

let UserControllerInstance = new UserController();
export default UserControllerInstance;
