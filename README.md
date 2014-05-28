# grunt-html-angular-prepare

> A grunt task for dynamically building up a list of custom directives in use.

Used in conjunction with the excellent [grunt-html-angular](https://www.npmjs.org/package/grunt-html-angular-validate)

## Community

If you have any problems setting up or using `grunt-json-sort`, open an issue. I would be happy to help.

**This is an active repository** that takes user suggestions, feedback and pull requests seriously. Happy grunting!

## Getting Started

This plugin requires Grunt `~0.4.0`
Since it is a companion task and not standalone, it needs grunt-html-angular-validate `~0.3.0` to run meaningfully.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

	npm install grunt-html-angular-prepare grunt-html-angular --save-dev

Once the plugin has been installed, it may be enabled inside your Gruntfile with these lines of JavaScript:

	grunt.loadNpmTasks('grunt-html-angular-prepare');
    grunt.loadNpmTasks('grunt-html-angular');

## The "htmlangularPrepare" task

### Overview

In your project's Gruntfile, add a section named `htmlangularPrepare` to the data object passed into `grunt.initConfig()`.

	grunt.initConfig({
		htmlangularPrepare: {
			src: [ 'app/**/*.js' ]
		}
	});

### Usage Example

All you need to do is specify the files that contain directive declarations as the source files.

```js
	grunt.initConfig({
		htmlangularPrepare: {
			src: [ 'app/**/*.js' ]
		},

        htmlangular: {
            src: [ 'app/**/*.html' ]
        }
	});
```

## Run Tests

		> npm install
		> grunt test

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
Please refer to this [document][commit-message-format] for a detailed explanation of git commit guidelines - source: [AngularJS](https://angualrjs.org)
[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#

## Release History
    
 * 2014-04-30  v1.0.1   lodash dependency
 * 2014-04-30  v1.0.0   First version!

---

Task submitted by Rahul Doshi.