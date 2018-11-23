import { Dimensions, ScaledSize } from 'react-native';
import { View } from 'native-base';

class ViewHelperClass {
	public ScreenSize: ScaledSize;

	constructor() {
		this.ScreenSize = Dimensions.get('window');
		console.log(this.ScreenSize.width);
		console.log(this.ScreenSize.height);
	}

	public GetCameraHeight() : Number {
		return this.ScreenSize.width * 16 / 9;
	}
}

let ViewHelperInstance = new ViewHelperClass();
export default ViewHelperInstance;