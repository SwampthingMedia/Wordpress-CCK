if (wpc.get_surrounding_metabox == undefined) {
  wpc.get_surrounding_metabox = function(element) {
    return element.parents(".postbox");
  };
}

// add Array.some function if not supported natively (IE9)
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
if (!Array.prototype.some) {
    Array.prototype.some = function(fun /*, thisp */) {
        "use strict";

        if (this == null)
            throw new TypeError();

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun != "function")
            throw new TypeError();

        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(thisp, t[i], i, t))
                return true;
        }
        return false;
    };
}
