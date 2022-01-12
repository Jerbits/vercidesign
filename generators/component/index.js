var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    async prompting() {
        this.answers = await this.prompt([
            {
                type: "input",
                name: "name",
                message: "Component name?",
            }
        ]);
    }

    writing() {
        this.log('Generating index file');
        this.log(process.cwd());
        this.fs.copyTpl(
            this.templatePath('file.js'),
            this.destinationPath('./index.js'),
            {componentName: this.answers.name}
        )
    }
};