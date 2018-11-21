import { StyleSheet, Platform, Dimensions } from 'react-native';

let StatusBarHeight;
switch (Platform.OS) {
	case 'ios':
		StatusBarHeight = 20;
		break;
	case 'android':
		StatusBarHeight = 24;
		break;
	default:
		StatusBarHeight = 0;
}

export class ThemeColor {
	static Blue1: string = '#00B9F2';
	static Blue2: string = '#28C3F3';
	static Blue3: string = '#04ACE0';
	static Grey1: string = '#828282';
	static Grey2: string = '#BBBBBB';
	static Grey3: string = '#E6E6E6';
	static Error: string = '#FF9900';
}

export class FontSize {
	static H1: number = 50;
	static H2: number = 40;
	static H3: number = 25;
	static H4: number = 23;
	static H5: number = 20;
	static H6: number = 18;
	static H7: number = 15;
	static H8: number = 13;
	static H9: number = 12;
}