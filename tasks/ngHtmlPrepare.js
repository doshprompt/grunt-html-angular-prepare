/* ==========================================
 * Identify all custom directives in codebase
 * ------------------------------------------
 */
module.exports = function (grunt) {
    var _ = require('lodash');

    function getDirectives (body) {
        var lines = body.replace(/\r\n/g, '\n').split(/\n/),
            regexDeclaration = /(directive\(["'][a-zA-z]*["'])/,
            customDirectives = [];

        lines.forEach(function (line) {
            var directive = line.match(regexDeclaration),
                str,
                res;

            if (directive) {
                // ensure that all are wrapped in double quotes
                str = directive[0].split("'").join('"');
                // then proceed to remove those quotes
                str = str.substring(str.indexOf('"') + 1, str.length - 1);
                // last, denormalize the directive names
                res = str.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();

                customDirectives.push(res);
            }
        });

        return customDirectives;
    }

    /**
     * Register the 'htmlangularPrepare' task
     *
     * This task accepts files and steps through them to find a directive declaration pattern.
     * It then reads out all of the directive names, denormalizes them as custom html tags
     * and finally, it updates the htmlangular task configuration to include these as well.
     */
    grunt.registerMultiTask('htmlangularPrepare', 'Using file globbing pattern as the primary source of information', function () {
        // get the target task's configuration(s)
        var target = grunt.config('htmlangular'),
            // initialize to use default custom tags
            custDirectives = target.options ? target.options.customtags || [] : [];

        // go through each file one at a time
        // to augment the initial collection
        this.filesSrc.forEach(function (file) {
            // extend with our own set(s) as we find them
            custDirectives = custDirectives.concat(getDirectives(grunt.file.read(file)));
        });

        // check if the taskOptions exist or else explicitly create them
        target.options = target.options || {};

        // overwrite property assignments of destination with own source
        _.assign(target.options, { customtags: custDirectives });

        // set a new target
        grunt.config('htmlangular', target);

        // log a bit what was added to config
        grunt.log.oklns(custDirectives.length + ' custom directives found');
    });
}