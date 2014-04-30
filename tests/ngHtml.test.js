/*
 * ========= A Handy Little Nodeunit Reference =========
 * https://github.com/caolan/nodeunit
 *
 * Test methods:
 *     test.expect(numAssertions);
 *     test.done();
 * Test assertions:
 *     test.ok(value, [message]);
 *     test.equal(actual, expected, [message]);
 *     test.notEqual(actual, expected, [message]);
 *     test.deepEqual(actual, expected, [message]);
 *     test.notDeepEqual(actual, expected, [message]);
 *     test.strictEqual(actual, expected, [message]);
 *     test.notStrictEqual(actual, expected, [message]);
 *     test.throws(block, [error], [message]);
 *     test.doesNotThrow(block, [error], [message]);
 *     test.ifError(value);
 */

var grunt = require('grunt'),
    exec = require('child_process').exec;

module.exports = {
    pass: function (test) {
        'use strict';

        test.expect(1);

        exec('grunt htmlangularPrepare htmlangular', function (error, stdout) {
            var testResults = grunt.file.readJSON('out/results.json');
            test.equal(testResults.fileschecked, testResults.filessucceeded,
                'should successfully validate all files');

            test.done();
        });
    },
    fail: function (test) {
        'use strict';

        test.expect(3);

        exec('grunt htmlangular', function (error, stdout) {
            test.equal(true, stdout.indexOf('Element custom-tag not allowed') > -1,
            'found a custom directive which makes for invalid syntax');
            test.equal(true, stdout.indexOf('Element my-tag not allowed') > -1,
                'found a custom directive which makes for invalid syntax');
            test.equal(true, stdout.indexOf('Element yet-another-tag not allowed') > -1,
                'found a custom directive which makes for invalid syntax');
            test.done();
        });
    }
}