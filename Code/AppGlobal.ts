export * from './Controller/UserController';

import UserControllerInstance, { UserController } from './Controller/UserController';
import PostControllerInstance, { PostControllerClass } from './Controller/PostController';

class AppGlobal {
	public UserControllerInstance: UserController;
	public PostControllerInstance: PostControllerClass;

	constructor(){
		this.UserControllerInstance = UserControllerInstance;
		this.PostControllerInstance = PostControllerInstance;
	}
}

let AppGlobalInstance = new AppGlobal();
export default AppGlobalInstance;