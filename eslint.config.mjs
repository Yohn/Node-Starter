import globals from "globals";
import pluginJs from "@eslint/js";


export default [
	{
		ignores: ['gulpfile.js', 'www/js/*']
	},
	{languageOptions: { globals: {...globals.browser, ...globals.node} }},
	pluginJs.configs.recommended,
];