'use strict';
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);
	}
	start() {
		this.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of the project ?'
			}
		]).then(answers => {
			// create the destination folder
			this.destinationRoot(answers.name);
			this.fs.copy(this.templatePath('**/**/*'), this.destinationPath());
			this.npmInstall();
			this.log('Project generated');
		});
	}
};
