import { Auth } from 'aws-amplify';
import { bool } from 'aws-sdk/clients/signer';

class UserController {
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

	public async ConfirmSignUpUser(email: string, code: string) {
		try {
			Auth.confirmSignUp(email, code, {
				forceAliasCreation: true
			});

			return ConfirmSignUpEnum.Success;
		} catch (error) {
			return ConfirmSignUpEnum.UnKnownError;
		}
	}

	private GetUserNameFromEmail(email: string) {
		return email.slice(0, email.indexOf('@'));
	}
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

let UserControllerInstance = new UserController();
export default UserControllerInstance;
