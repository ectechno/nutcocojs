define([], function () {

    var Util = Util || {};

    /* Generate a version 4 UUID that can be used as a random key */    
    Util.generateUUID = function () {
        var chars = '0123456789abcdef'.split('');

        var uuid = [], rnd = Math.random, r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4'; // version 4

        for (var i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | rnd() * 16;

                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r & 0xf];
            }
        }

        return uuid.join('');
    }


    Util.createStyleInHead = function (styleText) {
        var head = document.getElementsByTagName('head')[0]; // Get head element

        var style = document.createElement('style'); // Create style Node
        style.type = 'text/css';

        var cssRules = document.createTextNode(styleText); // Create style rules

        if (style.styleSheet)
            style.styleSheet.cssText = cssRules.nodeValue;
        else
            style.appendChild(cssRules);

        $(head).prepend(style);
    }

    Util.loadjscssfile = function (filename, filetype) {
        if (filetype == "js") { //if filename is a external JavaScript file
            var fileref = document.createElement('script')
            fileref.setAttribute("type", "text/javascript")
            fileref.setAttribute("src", filename)
        }
        else if (filetype == "css") { //if filename is an external CSS file
            var fileref = document.createElement("link")
            fileref.setAttribute("rel", "stylesheet")
            fileref.setAttribute("type", "text/css")
            fileref.setAttribute("href", filename)
        }
        if (typeof fileref != "undefined")
            document.getElementsByTagName("head")[0].appendChild(fileref)
    }

    return Util;
});
