!function(t){"use strict";function e(e,n){var o="disabled",i=t(e),a=i.data();n+="Text",a.resetText||i.data("resetText",i.html()),i.html(a[n]||t.fn.button.defaults[n]),setTimeout(function(){"loadingText"==n?i.addClass(o).attr(o,o):i.removeClass(o).removeAttr(o)},0)}function n(e){t(e).toggleClass("active")}t.fn.button=function(t){return this.each(function(){return"toggle"==t?n(this):(t&&e(this,t),void 0)})},t.fn.button.defaults={loadingText:"loading..."},t(function(){t("body").delegate(".btn[data-toggle]","click",function(){t(this).button("toggle")})})}(window.jQuery||window.ender);