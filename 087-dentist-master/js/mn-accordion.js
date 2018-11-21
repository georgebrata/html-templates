(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.index = mod.exports;
    }
})(this, function (exports) {
    /**
     * Created by maykinayki on 8/31/17.
     */

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var global = typeof window !== "undefined" ? window : undefined;
    var document = global.document;

    var Accordion = function () {
        function Accordion(element) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _classCallCheck(this, Accordion);

            var self = this;

            self.defaultOptions = {
                eventName: "click", //supports all HTML DOM Events (e.g. click, dblclick, mouseover etc.)
                eventDelay: 0, // enable event delay untill given milliseconds, usefull if eventName is mouseover
                collapsible: true, // enable all accordion item can be closed at once
                multiple: false, // enable multiple accordion item open at once
                defaultOpenedIndexes: 0, // -1 for close all as default, array of indexes accepted if multiple option is true

                //slide functions with jQuery. If you don't include jQuery in your website please override these functions
                slideDuration: 200,
                slideDownFn: function slideDownFn(el, slideDuration) {
                    el.style.WebkitTransitionDuration = slideDuration + "ms";
                    el.style.transitionDuration = slideDuration + "ms";

                    el.style.height = "auto";
                    var height = el.scrollHeight;
                    el.style.height = "0";
                    global.setTimeout(function () {
                        el.style.height = height + "px";
                    }, 0);
                },
                slideUpFn: function slideUpFn(el, slideDuration) {
                    el.style.WebkitTransitionDuration = slideDuration + "ms";
                    el.style.transitionDuration = slideDuration + "ms";
                    global.setTimeout(function () {
                        el.style.height = "0";
                    }, 0);
                }
            };
            self.options = _extends({}, self.defaultOptions, options);
            self.accordion = element;
            self.accordionItemsLength = self.accordion.childElementCount;

            if (document.readyState === "complete") {
                self.init();
            } else {
                document.addEventListener('readystatechange', function (event) {
                    if (event.target.readyState === "complete") {
                        self.init();
                    }
                }, false);
            }
        }

        _createClass(Accordion, [{
            key: "init",
            value: function init() {
                var self = this;

                var openedIndexes = self.options.defaultOpenedIndexes instanceof Array ? self.options.defaultOpenedIndexes : [self.options.defaultOpenedIndexes];

                var _loop = function _loop(i) {
                    var accordionItem = self.accordion.children[i];
                    var accordionItemHeading = accordionItem.getElementsByClassName("accordion-heading")[0];

                    if (accordionItemHeading) {
                        var eventFn = function eventFn(e) {
                            self.handleAccordionItemHeadingEvent(e, accordionItem, i);
                        };
                        if (accordionItemHeading.eventListenerAttached !== true) {
                            accordionItemHeading.addEventListener(self.options.eventName, eventFn, false);
                        }
                        accordionItemHeading.eventListenerAttached = true;
                    }

                    if (openedIndexes.indexOf(i) > -1) {
                        self.openAccordionItem(accordionItem, i);
                    } else {
                        self.closeAccordionItem(accordionItem);
                    }
                };

                for (var i = 0; i < self.accordionItemsLength; i++) {
                    _loop(i);
                }
            }
        }, {
            key: "openAccordionItem",
            value: function openAccordionItem(item, itemIndex) {
                var self = this;

                item.isOpened = true;
                item.classList.add("state-open");

                var accordionItemContent = item.getElementsByClassName("accordion-content")[0];

                if (!self.options.multiple) {
                    self.closeRestAccordionItems(itemIndex);
                }

                self.options.slideDownFn(accordionItemContent, self.options.slideDuration);
            }
        }, {
            key: "openAccordionItemByIndex",
            value: function openAccordionItemByIndex(itemIndex) {
                var self = this;

                var accordionItem = self.accordion.children[itemIndex];
                self.openAccordionItem(accordionItem, itemIndex);
            }
        }, {
            key: "closeAccordionItem",
            value: function closeAccordionItem(item) {
                var self = this;

                var accordionItemContent = item.getElementsByClassName("accordion-content")[0];
                item.isOpened = false;
                item.classList.remove("state-open");

                self.options.slideUpFn(accordionItemContent, self.options.slideDuration);
            }
        }, {
            key: "closeAccordionItemByIndex",
            value: function closeAccordionItemByIndex(itemIndex) {
                var self = this;

                var accordionItem = self.accordion.children[itemIndex];
                self.closeAccordionItem(accordionItem);
            }
        }, {
            key: "closeRestAccordionItems",
            value: function closeRestAccordionItems() {
                var self = this;

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                for (var i = 0; i < self.accordionItemsLength; i++) {
                    if (args.indexOf(i) === -1) {
                        var _accordionItem = self.accordion.children[i];
                        self.closeAccordionItem(_accordionItem);
                    }
                }
            }
        }, {
            key: "handleAccordionItemHeadingEvent",
            value: function handleAccordionItemHeadingEvent(e, item, itemIndex) {
                var self = this;
                self.eventTimeout && window.clearTimeout(self.eventTimeout);
                self.eventTimeout = window.setTimeout(function () {
                    if (item.isOpened && !self.options.multiple) {
                        if (self.options.collapsible) {
                            self.closeAccordionItem(item);
                        }
                        self.closeRestAccordionItems(itemIndex);
                    } else if (item.isOpened && self.options.multiple) {
                        self.closeAccordionItem(item);
                    } else {
                        self.openAccordionItem(item, itemIndex);
                    }
                }, self.options.eventDelay);
            }
        }]);

        return Accordion;
    }();

    global.Accordion = Accordion;

    exports.default = Accordion;
});
