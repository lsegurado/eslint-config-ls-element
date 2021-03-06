export default {
	env: {
		browser: true,
		es2020: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'preact',
		'plugin:@typescript-eslint/recommended'
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 11,
		sourceType: "module"
	},
	plugins: [
		"@typescript-eslint"
	],
	rules: {
		"@typescript-eslint/ban-types": [
			"error",
			{
				"extendDefaults": true,
				"types": {
					"object": false,
					"Function": false
				}
			}
		],
		"react-hooks/rules-of-hooks": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"react/display-name": "off",
		"@typescript-eslint/no-empty-interface": "off",
		"no-mixed-spaces-and-tabs": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-namespace": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-this-alias": "off",
		"@typescript-eslint/no-inferrable-types": [
			"off",
			{
				"ignoreParameters": true
			}
		],
		"indent": [
			"warn",
			2,
			{
				"SwitchCase": 1
			}
		],
		"linebreak-style": [
			"warn",
			"windows"
		],
		"quotes": [
			"warn",
			"single"
		],
		"semi": [
			"warn",
			"always"
		]
	}
};
