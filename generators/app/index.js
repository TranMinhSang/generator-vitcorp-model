'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
    prompting: function() {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the VIT Corp Tool\'s ' + chalk.red('generator-vitcorp-model') + ' generator!'
        ));

        var prompts = [{
            type: 'input',
            name: 'name',
            message: 'What is your Model\'s name?',
        }, {
            type: 'input',
            name: 'attrs',
            message: 'Model\'s attributes list (optional, separated by commas):',
        }];

        return this.prompt(prompts).then(function(props) {
            // To access props later use this.props.someAnswer;
            this.props = props;
        }.bind(this));
    },

    writing: function() {
      var iattrs = new String(this.props.attrs).split(',');
        var attrs = [];
        for (var i = 0; i < iattrs.length; i++) {
            attrs.push(iattrs[i].trim());
        }
        var context = {
            name: this.props.name,
            attrs: attrs
        };
        this.fs.copyTpl(
            this.templatePath('_Entities/_Entity.cs'),
            this.destinationPath('Entities/' + this.props.name + '.cs'), context
        );
    }
});
