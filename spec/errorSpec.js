/**********
 * Modules
 **********/

// Core
var path = require('path');
var fs = require('fs');

// helper
var fileHelper = require('./helper/file.js')();
var toolHelper = require('./helper/tool.js')();

//lib
var logger = require('../lib/logger.js')();

jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

toolHelper.setStaticArgs(
    ' --github-username="'+process.env.GITHUB_USERNAME+'"'+
    ' --github-password="'+process.env.GITHUB_PASSWORD+'"');

describe("A spec for error handling", function() {

    beforeAll(function(done) {
        fileHelper.reset(fileHelper.resetPlatforms.bind(this, done));
    });

    // Error handling
    it("should exit with a fatal error if run in a directory that doesn't appear to be a valid Cordova project with plugins", function(done){
        toolHelper.run(null, function(err, stdout, stderr, output){
            expect(err).toBeTruthy();
            expect(stdout).toContain('FATAL ERROR: Failed to read plugins/fetch.json - ensure you\'re running this command from the root of a Cordova project');
            done();
        });
    });

});

