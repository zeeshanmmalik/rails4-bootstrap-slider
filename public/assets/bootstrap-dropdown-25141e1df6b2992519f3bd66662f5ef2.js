!function(n){"use strict";function o(){n(e).parent("li").removeClass("open")}n.fn.dropdown=function(t){return this.each(function(){n(this).delegate(t||e,"click",function(){var e=n(this).parent("li"),t=e.hasClass("open");return o(),!t&&e.toggleClass("open"),!1})})};var e="a.menu, .dropdown-toggle";n(function(){n("html").bind("click",o),n("body").dropdown("[data-dropdown] a.menu, [data-dropdown] .dropdown-toggle")})}(window.jQuery||window.ender);