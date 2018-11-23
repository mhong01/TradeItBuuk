export * from './Controller/UserController';

import UserControllerInstance, { UserController } from './Controller/UserController';

class AppGlobal {
	public UserControllerInstance: UserController;

	constructor(){
		this.UserControllerInstance = UserControllerInstance;
	}
}

let AppGlobalInstance = new AppGlobal();
export default AppGlobalInstance;