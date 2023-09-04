import defaultTheme from 'windicss/defaultTheme';

export const colors: Record<string, Record<number, string>> = {
	...defaultTheme.colors,
	gray: {
		50: '#f9fafb',
		100: '#eaeaeb',
		200: '#cacbcd',
		300: '#a7a9ac',
		400: '#696c71',
		500: '#282d34',
		600: '#24292f',
		700: '#181b20',
		800: '#121518',
		900: '#0c0e10',
	},
	primary: {
		50: '#ffa432',
		100: '#ff9a28',
		200: '#ff901e',
		300: '#1486ff',
		400: '#ff8614',
		500: '#ff7200',
		600: '#f56800',
		700: '#eb5e00',
		800: '#e15400',
		900: '#d74a00',
	},
};
