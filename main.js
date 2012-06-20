require.config({
    paths: {
        text: './jslibs/require/text',
        order: './jslibs/require/order',
        i18n: './jslibs/require/i18n'
    }
});

/*
This is the main entry to the application. This script is called from the main HTML file.
All base libraries will be loaded by this script and any configuration related to the
base libraries may be setup here. Once bae libraries are setup, application will be instantiated.
*/

require(['./suite/startup'], function (Startup) {

    //do neccesary configurations for the thirdparty libs
    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };

    //start the main application
    var startup = new Startup();
    startup.init();
});
