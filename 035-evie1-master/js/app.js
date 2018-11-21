// Equivalent of jQuery .ready
document.addEventListener('DOMContentLoaded',function(){

	// Initialize variables
	var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop; // Scroll position of body

	// Listener to resizes
	window.onresize = function(event) {
    	lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
	};

	// Helper functions
	// Detect offset of element
	function getOffset( el ) {
		var _x = 0;
		var _y = 0;
		while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
			_x += el.offsetLeft - el.scrollLeft;
			_y += el.offsetTop - el.scrollTop;
			el = el.offsetParent;
		}
		return { top: _y, left: _x };
	};

	// Add class to element => https://www.sitepoint.com/add-remove-css-class-vanilla-js/
	function addNewClass(elements, myClass) {
		// if there are no elements, we're done
		if (!elements) { return; }
		// if we have a selector, get the chosen elements
		if (typeof(elements) === 'string') {
			elements = document.querySelectorAll(elements);
		}
		// if we have a single DOM element, make it an array to simplify behavior
		else if (elements.tagName) { elements=[elements]; }
		// add class to all chosen elements
		for (var i=0; i<elements.length; i++) {
			// if class is not already found
			if ( (' '+elements[i].className+' ').indexOf(' '+myClass+' ') < 0 ) {
			// add class
			elements[i].className += ' ' + myClass;
			}
		}
	};

	// Remove class from element => https://www.sitepoint.com/add-remove-css-class-vanilla-js/
	function removeClass(elements, myClass) {
		// if there are no elements, we're done
		if (!elements) { return; }

		// if we have a selector, get the chosen elements
		if (typeof(elements) === 'string') {
			elements = document.querySelectorAll(elements);
		}
		// if we have a single DOM element, make it an array to simplify behavior
		else if (elements.tagName) { elements=[elements]; }
		// create pattern to find class name
		var reg = new RegExp('(^| )'+myClass+'($| )','g');
		// remove class from all chosen elements
		for (var i=0; i<elements.length; i++) {
			elements[i].className = elements[i].className.replace(reg,' ');
		}
	}

	// Smooth scrolling => https://codepen.io/andylobban/pen/qOLKVW
	if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {
		// Function to animate the scroll
		var smoothScroll = function (anchor, duration) {
		// Calculate how far and how fast to scroll
		var startLocation = window.pageYOffset;
		var endLocation = anchor.offsetTop - 40; // Remove 40 pixels for padding
		var distance = endLocation - startLocation;
		var increments = distance/(duration/16);
		var stopAnimation;
		// Scroll the page by an increment, and check if it's time to stop
		var animateScroll = function () {
			window.scrollBy(0, increments);
			stopAnimation();
		};
	// If scrolling down
		if ( increments >= 0 ) {
		// Stop animation when you reach the anchor OR the bottom of the page
			stopAnimation = function () {
				var travelled = window.pageYOffset;
				if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
					clearInterval(runAnimation);
				}
			};
		}
            // Loop the animation function
            var runAnimation = setInterval(animateScroll, 16);
        };
		// Define smooth scroll links
		var scrollToggle = document.querySelectorAll('.scroll');
		// For each smooth scroll link
		[].forEach.call(scrollToggle, function (toggle) {
			// When the smooth scroll link is clicked
			toggle.addEventListener('click', function(e) {
		// Prevent the default link behavior
		e.preventDefault();
		// Get anchor link and calculate distance from the top
		var dataTarget = document.querySelector('.landing__section');
		var dataSpeed = toggle.getAttribute('data-speed');
	 	// If the anchor exists
		if (dataTarget) {
			// Scroll to the anchor
				smoothScroll(dataTarget, dataSpeed || 700);
			}
		}, false);
		});
	}

	
		// Listen to scroll position changes
	window.addEventListener("scroll",function(){

		// NAVIGATION BAR ON LANDING FIXED
		// If there is a #navConverter element then attach listener to scroll events
		if (document.body.contains(document.getElementById("navConverter"))){
			var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
			// if the current body position is less than 20 pixels away from our converter, convert
			if (lastScrollTop > (getOffset( document.getElementById('navConverter') ).top - 60)){ removeClass(document.querySelector('.navbar'),'navbar--extended');} else {addNewClass(document.querySelector('.navbar'),'navbar--extended');}
		}

		// SCROLL TO NEXT ELEMENT ON LANDING
		if (document.body.contains(document.getElementById('scrollToNext'))){
			var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
			// if the current body position is less than 20 pixels away from the top, hide the icon
			if (lastScrollTop > 20){ addNewClass(document.getElementById('scrollToNext'),'invisible');} else {removeClass(document.getElementById('scrollToNext'),'invisible');}
		}
	});

	// Responsive mobile menu
	// Create the menu 
	if (document.getElementsByClassName("nav__mobile") && document.getElementsByClassName('nav__mobile').length > 0){
		var navElements = document.getElementsByClassName('navbar__menu')[0].innerHTML;
		document.getElementsByClassName('nav__mobile')[0].innerHTML = navElements;
		// Load 
		var nav = responsiveNav(".nav__mobile", { // Selector
			animate: true, // Boolean: Use CSS3 transitions, true or false
			transition: 284, // Integer: Speed of the transition, in milliseconds
			label: "Menu", // String: Label for the navigation toggle
			insert: "before", // String: Insert the toggle before or after the navigation
			customToggle: "toggle", // Selector: Specify the ID of a custom toggle
			openPos: "relative", // String: Position of the opened nav, relative or static
			navClass: "nav__mobile", // String: Default CSS class. If changed, you need to edit the CSS too!
		});
	} else {
		 addNewClass(document.querySelector('.navbar__menu'),'navbar__menu--noMob');
		 addNewClass(document.querySelector('.navbar__menu-mob'), 'navbar__menu-mob--noMob');
	};	
});
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.flexibility = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function alignContent(target) {
	var start;
	var factor;

	if (target.lines.length < 2 || target.alignContent === 'stretch') {
		factor = target.crossSpace / target.lines.length;
		start = 0;

		target.lines.forEach(function (line) {
			line.crossStart = start;
			line.cross += factor;

			start += line.cross;
		});
	} else if (target.alignContent === 'flex-start') {
		start = 0;

		target.lines.forEach(function (line) {
			line.crossStart = start;

			start += line.cross;
		});
	} else if (target.alignContent === 'flex-end') {
		start = target.crossSpace;

		target.lines.forEach(function (line) {
			line.crossStart = start;

			start += line.cross;
		});
	} else if (target.alignContent === 'center') {
		start = target.crossSpace / 2;

		target.lines.forEach(function (line) {
			line.crossStart = start;

			start += line.cross;
		});
	} else if (target.alignContent === 'space-between') {
		factor = target.crossSpace / (target.lines.length - 1);
		start = 0;

		target.lines.forEach(function (line) {
			line.crossStart = start;

			start += line.cross + factor;
		});
	} else if (target.alignContent === 'space-around') {
		factor = target.crossSpace * 2 / (target.lines.length * 2);
		start = factor / 2;

		target.lines.forEach(function (line) {
			line.crossStart = start;

			start += line.cross + factor;
		});
	} else if (target.alignContent === 'stretch') {
		factor = target.crossSpace / target.lines.length;
		start = 0;

		target.lines.forEach(function (line) {
			line.crossStart = start;
			line.cross += factor;

			start += line.cross;
		});
	}
};

},{}],2:[function(require,module,exports){
module.exports = function alignItems(target) {
	target.lines.forEach(function (line) {
		line.children.forEach(function (child) {
			if (child.alignSelf === 'flex-start') {
				child.crossStart = line.crossStart;
			} else if (child.alignSelf === 'flex-end') {
				child.crossStart = line.crossStart + line.cross - child.crossAround;
			} else if (child.alignSelf === 'center') {
				child.crossStart = line.crossStart + (line.cross - child.crossAround) / 2;
			} else if (child.alignSelf === 'stretch') {
				child.crossStart = line.crossStart;
				child.crossAround = line.cross;
			}
		});
	});
};

},{}],3:[function(require,module,exports){
module.exports = function flexDirection(target, targetFlexDirection, targetAlignItems) {
	var clientRect = target.node.getBoundingClientRect();

	if (targetFlexDirection === 'row' || targetFlexDirection === 'row-reverse') {
		target.mainAxis  = 'inline';
		target.crossAxis = 'block';

		if (typeof target.main === 'number' || typeof target.cross === 'number') {
			if (target.flexDirection === 'row' || targetFlexDirection === 'row-reverse') {
				target.width  = target.main;
				target.height = target.cross;
			} else {
				target.width  = target.cross;
				target.height = target.main;
			}
		}

		target.main  = target.width;
		target.cross = target.height;

		target.mainClient  = clientRect.width  || target.node.offsetWidth;
		target.crossClient = clientRect.height || target.node.offsetHeight;

		target.mainBefore  = target.marginLeft;
		target.mainAfter   = target.marginRight;
		target.crossBefore = target.marginTop;
		target.crossAfter  = target.marginBottom;
	} else {
		target.mainAxis  = 'block';
		target.crossAxis = 'inline';

		target.main  = target.height;
		target.cross = target.width;

		if (typeof target.main === 'number' || typeof target.cross === 'number') {
			if (target.flexDirection === 'column' || targetFlexDirection === 'column-reverse') {
				target.width  = target.cross;
				target.height = target.main;
			} else {
				target.width  = target.main;
				target.height = target.cross;
			}
		}

		target.mainClient  = clientRect.height || target.node.offsetHeight;
		target.crossClient = clientRect.width  || target.node.offsetWidth;

		target.mainBefore  = target.marginTop;
		target.mainAfter   = target.marginBottom;
		target.crossBefore = target.marginLeft;
		target.crossAfter  = target.marginRight;
	}

	if (typeof target.flexBasis === 'number') {
		target.main = target.flexBasis;
	}

	if (target.main === 'auto') {
		target.mainAround = target.mainClient;
	} else {
		target.mainAround = target.main;
	}

	if (target.cross === 'auto') {
		target.crossAround = target.crossClient;
	} else {
		target.crossAround = target.cross;
	}

	if (typeof target.mainBefore === 'number') {
		target.mainAround += target.mainBefore;
	}

	if (typeof target.mainAfter === 'number') {
		target.mainAround += target.mainAfter;
	}

	if (typeof target.crossBefore === 'number') {
		target.crossAround += target.crossBefore;
	}

	if (typeof target.crossBefore === 'number') {
		target.crossAround += target.crossBefore;
	}

	if (target.alignSelf === 'auto') {
		target.alignSelf = targetAlignItems;
	}
};

},{}],4:[function(require,module,exports){
module.exports = function flexGrow(line) {
	if (line.mainSpace > 0) {
		var growFactor = line.children.reduce(function (lastGrowFactor, child) {
			return lastGrowFactor + child.flexGrow;
		}, 0);

		if (growFactor > 0) {
			line.children.forEach(function (child) {
				child.mainAround += child.flexGrow / growFactor * line.mainSpace;
			});

			line.main = line.children.reduce(function (main, child) {
				return main + child.mainAround;
			}, 0);

			line.mainSpace = 0;
		}
	}
};

},{}],5:[function(require,module,exports){
module.exports = function flexShrink(line) {
	if (line.mainSpace < 0) {
		var shrinkFactor = line.children.reduce(function (lastShrinkFactor, child) {
			return lastShrinkFactor + child.flexShrink;
		}, 0);

		if (shrinkFactor > 0) {
			line.children.forEach(function (child) {
				child.mainAround += child.flexShrink / shrinkFactor * line.mainSpace;
			});

			line.main = line.children.reduce(function (main, child) {
				return main + child.mainAround;
			}, 0);

			line.mainSpace = 0;
		}
	}
};

},{}],6:[function(require,module,exports){
module.exports = function flexboxLines(target) {
	var line;

	target.lines = [line = {
		main:  0,
		cross: 0,
		children: []
	}];

	target.children.forEach(function (child) {
		if (
			target.flexWrap === 'nowrap' ||
			line.children.length === 0 ||
			target.mainAround >= line.main + child.mainAround
		) {
			line.main += child.mainAround;
			line.cross = Math.max(line.cross, child.crossAround);
		} else {
			target.lines.push(line = {
				main:  child.mainAround,
				cross: child.crossAround,
				children: []
			});
		}

		line.children.push(child);
	});
};

},{}],7:[function(require,module,exports){
module.exports = function flexbox(target) {
	target.descendants.forEach(function (descendant) {
		module.exports(descendant);
	});

	if (target.display === 'flex') {
		target.children.forEach(function (child) {
			require('./flex-direction')(child, target.flexDirection, target.alignItems);
		});
	} else {
		return target;
	}

	require('./order')(target);
	require('./flex-direction')(target, target.flexDirection, target.alignItems);
	require('./flexbox-lines')(target);

	if (target.main === 'auto') {
		target.main = Math.max(target.mainAround, target.lines.reduce(function (main, line) {
			return Math.max(main, line.main);
		}, 0));

		if (target.flexDirection === 'row') {
			target.mainAround = target.mainClient + target.mainBefore + target.mainAfter;
		} else {
			target.mainAround = target.main + target.mainBefore + target.mainAfter;
		}
	}

	if (target.cross === 'auto') {
		target.cross = target.lines.reduce(function (cross, line) {
			return cross + line.cross;
		}, 0);

		if (target.flexDirection === 'column') {
			target.crossAround = target.crossClient + target.crossBefore + target.crossAfter;
		} else {
			target.crossAround = target.cross + target.crossBefore + target.crossAfter;
		}

		target.crossSpace = target.crossAround - target.cross;
	} else {
		target.crossSpace = target.cross - target.lines.reduce(function (cross, line) {
			return cross + line.cross;
		}, 0);
	}

	require('./align-content')(target);

	target.lines.forEach(function (line) {
		line.mainSpace = target.main - line.main;

		require('./flex-grow')(line);
		require('./flex-shrink')(line);
		require('./margin-main')(line);
		require('./margin-cross')(line);
		require('./justify-content')(line, target.justifyContent);
	});

	require('./align-items')(target);

	return target;
};

},{"./align-content":1,"./align-items":2,"./flex-direction":3,"./flex-grow":4,"./flex-shrink":5,"./flexbox-lines":6,"./justify-content":8,"./margin-cross":9,"./margin-main":10,"./order":11}],8:[function(require,module,exports){
module.exports = function justifyContent(line, targetJustifyContent) {
	var start;
	var factor;

	if (targetJustifyContent === 'flex-start') {
		start = 0;

		line.children.forEach(function (child) {
			child.mainStart = start;

			start += child.mainAround;
		});
	} else if (targetJustifyContent === 'flex-end') {
		start = line.mainSpace;

		line.children.forEach(function (child) {
			child.mainStart = start;

			start += child.mainAround;
		});
	} else if (targetJustifyContent === 'center') {
		start = line.mainSpace / 2;

		line.children.forEach(function (child) {
			child.mainStart = start;

			start += child.mainAround;
		});
	} else if (targetJustifyContent === 'space-between') {
		factor = line.mainSpace / (line.children.length - 1);

		start = 0;

		line.children.forEach(function (child) {
			child.mainStart = start;

			start += child.mainAround + factor;
		});
	} else if (targetJustifyContent === 'space-around') {
		factor = line.mainSpace * 2 / (line.children.length * 2);
		start = factor / 2;

		line.children.forEach(function (child) {
			child.mainStart = start;

			start += child.mainAround + factor;
		});
	}
};

},{}],9:[function(require,module,exports){
module.exports = function marginCross(line) {
	line.children.forEach(function (child) {
		var count = 0;

		if (child.crossBefore === 'auto') {
			++count;
		}

		if (child.crossAfter === 'auto') {
			++count;
		}

		var childSpace = line.cross - child.crossAround;

		if (child.crossBefore === 'auto') {
			child.crossBefore = childSpace / count;

			child.crossAround += child.crossBefore;
		}

		if (child.crossAfter === 'auto') {
			child.crossAfter = childSpace / count;

			child.crossAround += child.crossAfter;
		}
	});
};

},{}],10:[function(require,module,exports){
module.exports = function marginCross(line) {
	var count = 0;

	line.children.forEach(function (child) {
		if (child.mainBefore === 'auto') {
			++count;
		}

		if (child.mainAfter === 'auto') {
			++count;
		}
	});

	if (count > 0) {
		line.children.forEach(function (child) {
			if (child.mainBefore === 'auto') {
				child.mainBefore = line.mainSpace / count;

				child.mainAround += child.mainBefore;
			}

			if (child.mainAfter === 'auto') {
				child.mainAfter = line.mainSpace / count;

				child.mainAround += child.mainAfter;
			}
		});

		line.mainSpace = 0;
	}
};

},{}],11:[function(require,module,exports){
module.exports = function order(target) {
	target.children.sort(function (childA, childB) {
		return childA.order - childB.order || childA.index - childB.index;
	});
};

},{}],12:[function(require,module,exports){
module.exports = function getFlexStyles(target, data, isFlexChild) {
	var style = Object.assign(data, {
		alignContent: 'stretch',
		alignItems: 'stretch',
		alignSelf: 'auto',
		display: 'inline',
		flexBasis: 'auto',
		flexDirection: 'row',
		flexGrow:   0,
		flexShrink: 1,
		flexWrap: 'nowrap',
		justifyContent: 'flex-start',
		height: 'auto',
		marginTop:    0,
		marginRight:  0,
		marginLeft:   0,
		marginBottom: 0,
		maxHeight: 'none',
		maxWidth: 'none',
		minHeight: 0,
		minWidth: 0,
		order: 0,
		position: 'static',
		width: 'auto'
	});

	if (target.hasAttribute('data-style')) {
		target.setAttribute('style', target.getAttribute('data-style'));
	} else {
		target.setAttribute('data-style', target.getAttribute('style') || '');
	}

	var attr = (target.getAttribute('data-style') || '') + ';' + (target.getAttribute('data-flex') || '');
	var re = /([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g;
	var decl;

	while (decl = re.exec(attr)) {
		var name = decl[1].toLowerCase().replace(/-[a-z]/g, function (match) {
			return match.slice(1).toUpperCase();
		});

		style[name] = parseFloat(decl[2]);

		if (isNaN(style[name])) {
			style[name] = decl[2];
		}
	}

	if (isFlexChild) {
		target.style.display  = 'inline-block';
		target.style.position = 'absolute';
	}

	var rect = target.getBoundingClientRect();

	style.clientWidth  = rect.width || target.offsetWidth;
	style.clientHeight = rect.height || target.offsetHeight;

	return style;
};

},{}],13:[function(require,module,exports){
/*! Flexibility 2.0.0 | MIT Licensed | github.com/10up/flexibility */

module.exports = function flexibility(target) {
	var data1 = module.exports.walk(target);

	var data2 = module.exports.flexbox(data1);

	var data3 = module.exports.write(data2);

	return data3;
};

module.exports.flexbox = require('./flexbox');
module.exports.getFlexStyles = require('./getFlexStyles');
module.exports.walk = require('./walk');
module.exports.write = require('./write');

// module.exports.process = require('./process');
// module.exports.support = require('./support');

},{"./flexbox":7,"./getFlexStyles":12,"./walk":14,"./write":15}],14:[function(require,module,exports){
var getFlexStyles = require('../getFlexStyles');

module.exports = function walk(target, ancestorData, isFlexChild) {
	var flexContainerRE = /(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i;
	var isFlexContainer = flexContainerRE.test(target.getAttribute('data-flex'));
	var data = {
		node: target,
		children: [],
		descendants: []
	};

	if (isFlexContainer) {
		if (ancestorData !== undefined) {
			ancestorData.descendants.push(data);
		}
	}

	if (isFlexContainer || !ancestorData) {
		ancestorData = data;
	}

	Array.prototype.forEach.call(target.childNodes, function (childNode) {
		if (isFlexContainer && childNode.nodeType === 3 && childNode.nodeValue.trim()) {
			var oldNode = childNode;

			childNode = target.insertBefore(document.createElement('flex-item'), oldNode);

			childNode.appendChild(oldNode);
		}

		if (childNode.nodeType === 1) {
			var childData = module.exports(childNode, ancestorData, isFlexContainer);

			if (isFlexContainer) {
				data.children.push(childData);
			}
		}
	});

	if (isFlexContainer || isFlexChild) {
		getFlexStyles(target, data, isFlexChild);
	}

	return data;
};

},{"../getFlexStyles":12}],15:[function(require,module,exports){
module.exports = function write(target) {
	target.descendants.filter(function (descendant) {
		return target.children.indexOf(descendant) === -1;
	}).forEach(function (descendant) {
		module.exports(descendant);
	});

	if (!target.display) {
		return;
	}

	var style = target.node.style;

	if ('mainStart' in target) {
		style.position = 'absolute';

		if (target.mainAxis === 'inline') {
			style.left = target.mainStart  + 'px';
			style.top  = target.crossStart + 'px';

			style.marginTop    = target.crossBefore + 'px';
			style.marginRight  = target.mainAfter   + 'px';
			style.marginBottom = target.crossAfter  + 'px';
			style.marginLeft   = target.mainBefore  + 'px';
		} else {
			style.left = target.crossStart + 'px';
			style.top  = target.mainStart  + 'px';

			style.marginTop    = target.mainBefore  + 'px';
			style.marginRight  = target.crossAfter  + 'px';
			style.marginBottom = target.mainAfter   + 'px';
			style.marginLeft   = target.crossBefore + 'px';
		}

		if (target.mainAxis === 'inline') {
			style.width  = target.mainAround  - target.mainBefore - target.mainAfter + 'px';
			style.height = target.crossAround - target.crossBefore - target.crossAfter + 'px';
		} else {
			if (target.cross === 'auto') {
				style.width = target.crossClient - target.crossBefore - target.crossAfter + 'px';
			} else {
				style.width = target.crossAround - target.crossBefore - target.crossAfter + 'px';
			}

			if (target.main === 'auto') {
				style.height = target.mainClient - target.mainBefore - target.mainAfter + 'px';
			} else {
				style.height = target.mainAround - target.mainBefore - target.mainAfter + 'px';
			}
		}
	} else {
		if (!style.position) {
			style.position = 'relative';
		}

		if (target.mainAxis === 'inline') {
			style.width = target.mainAround - target.mainBefore - target.mainAfter + 'px';
			style.height = target.crossAround - target.crossBefore - target.crossAfter + 'px';
		} else {
			style.width = target.crossAround - target.crossBefore - target.crossAfter + 'px';
			style.height = target.mainAround - target.mainBefore - target.mainAfter + 'px';
		}
	}

	if (target.children) {
		target.children.forEach(function (child) {
			module.exports(child);
		});
	}
};

},{}]},{},[13])(13)
});
/*! responsive-nav.js 1.0.39
 * https://github.com/viljamis/responsive-nav.js
 * http://responsive-nav.com
 *
 * Copyright (c) 2015 @viljamis
 * Available under the MIT license
 Licensed under the MIT license.

Copyright (c) 2013 Viljami Salminen, http://viljamis.com/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* global Event */
(function (document, window, index) {
  // Index is used to keep multiple navs on the same page namespaced

  "use strict";

  var responsiveNav = function (el, options) {

    var computed = !!window.getComputedStyle;
    
    /**
     * getComputedStyle polyfill for old browsers
     */
    if (!computed) {
      window.getComputedStyle = function(el) {
        this.el = el;
        this.getPropertyValue = function(prop) {
          var re = /(\-([a-z]){1})/g;
          if (prop === "float") {
            prop = "styleFloat";
          }
          if (re.test(prop)) {
            prop = prop.replace(re, function () {
              return arguments[2].toUpperCase();
            });
          }
          return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        };
        return this;
      };
    }
    /* exported addEvent, removeEvent, getChildren, setAttributes, addClass, removeClass, forEach */
    
    /**
     * Add Event
     * fn arg can be an object or a function, thanks to handleEvent
     * read more at: http://www.thecssninja.com/javascript/handleevent
     *
     * @param  {element}  element
     * @param  {event}    event
     * @param  {Function} fn
     * @param  {boolean}  bubbling
     */
    var addEvent = function (el, evt, fn, bubble) {
        if ("addEventListener" in el) {
          // BBOS6 doesn't support handleEvent, catch and polyfill
          try {
            el.addEventListener(evt, fn, bubble);
          } catch (e) {
            if (typeof fn === "object" && fn.handleEvent) {
              el.addEventListener(evt, function (e) {
                // Bind fn as this and set first arg as event object
                fn.handleEvent.call(fn, e);
              }, bubble);
            } else {
              throw e;
            }
          }
        } else if ("attachEvent" in el) {
          // check if the callback is an object and contains handleEvent
          if (typeof fn === "object" && fn.handleEvent) {
            el.attachEvent("on" + evt, function () {
              // Bind fn as this
              fn.handleEvent.call(fn);
            });
          } else {
            el.attachEvent("on" + evt, fn);
          }
        }
      },
    
      /**
       * Remove Event
       *
       * @param  {element}  element
       * @param  {event}    event
       * @param  {Function} fn
       * @param  {boolean}  bubbling
       */
      removeEvent = function (el, evt, fn, bubble) {
        if ("removeEventListener" in el) {
          try {
            el.removeEventListener(evt, fn, bubble);
          } catch (e) {
            if (typeof fn === "object" && fn.handleEvent) {
              el.removeEventListener(evt, function (e) {
                fn.handleEvent.call(fn, e);
              }, bubble);
            } else {
              throw e;
            }
          }
        } else if ("detachEvent" in el) {
          if (typeof fn === "object" && fn.handleEvent) {
            el.detachEvent("on" + evt, function () {
              fn.handleEvent.call(fn);
            });
          } else {
            el.detachEvent("on" + evt, fn);
          }
        }
      },
    
      /**
       * Get the children of any element
       *
       * @param  {element}
       * @return {array} Returns matching elements in an array
       */
      getChildren = function (e) {
        if (e.children.length < 1) {
          throw new Error("The Nav container has no containing elements");
        }
        // Store all children in array
        var children = [];
        // Loop through children and store in array if child != TextNode
        for (var i = 0; i < e.children.length; i++) {
          if (e.children[i].nodeType === 1) {
            children.push(e.children[i]);
          }
        }
        return children;
      },
    
      /**
       * Sets multiple attributes at once
       *
       * @param {element} element
       * @param {attrs}   attrs
       */
      setAttributes = function (el, attrs) {
        for (var key in attrs) {
          el.setAttribute(key, attrs[key]);
        }
      },
    
      /**
       * Adds a class to any element
       *
       * @param {element} element
       * @param {string}  class
       */
      addClass = function (el, cls) {
        if (el.className.indexOf(cls) !== 0) {
          el.className += " " + cls;
          el.className = el.className.replace(/(^\s*)|(\s*$)/g,"");
        }
      },
    
      /**
       * Remove a class from any element
       *
       * @param  {element} element
       * @param  {string}  class
       */
      removeClass = function (el, cls) {
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        el.className = el.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g,"");
      },
    
      /**
       * forEach method that passes back the stuff we need
       *
       * @param  {array}    array
       * @param  {Function} callback
       * @param  {scope}    scope
       */
      forEach = function (array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
          callback.call(scope, i, array[i]);
        }
      };

    var nav,
      opts,
      navToggle,
      styleElement = document.createElement("style"),
      htmlEl = document.documentElement,
      hasAnimFinished,
      isMobile,
      navOpen;

    var ResponsiveNav = function (el, options) {
        var i;

        /**
         * Default options
         * @type {Object}
         */
        this.options = {
          animate: true,                    // Boolean: Use CSS3 transitions, true or false
          transition: 284,                  // Integer: Speed of the transition, in milliseconds
          label: "Menu",                    // String: Label for the navigation toggle
          insert: "before",                 // String: Insert the toggle before or after the navigation
          customToggle: "",                 // Selector: Specify the ID of a custom toggle
          closeOnNavClick: false,           // Boolean: Close the navigation when one of the links are clicked
          openPos: "relative",              // String: Position of the opened nav, relative or static
          navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
          navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
          jsClass: "js",                    // String: 'JS enabled' class which is added to <html> element
          init: function(){},               // Function: Init callback
          open: function(){},               // Function: Open callback
          close: function(){}               // Function: Close callback
        };

        // User defined options
        for (i in options) {
          this.options[i] = options[i];
        }

        // Adds "js" class for <html>
        addClass(htmlEl, this.options.jsClass);

        // Wrapper
        this.wrapperEl = el.replace("#", "");

        // Try selecting ID first
        if (document.getElementById(this.wrapperEl)) {
          this.wrapper = document.getElementById(this.wrapperEl);

        // If element with an ID doesn't exist, use querySelector
        } else if (document.querySelector(this.wrapperEl)) {
          this.wrapper = document.querySelector(this.wrapperEl);

        // If element doesn't exists, stop here.
        } else {
          throw new Error("The nav element you are trying to select doesn't exist");
        }

        // Inner wrapper
        this.wrapper.inner = getChildren(this.wrapper);

        // For minification
        opts = this.options;
        nav = this.wrapper;

        // Init
        this._init(this);
      };

    ResponsiveNav.prototype = {

      /**
       * Unattaches events and removes any classes that were added
       */
      destroy: function () {
        this._removeStyles();
        removeClass(nav, "closed");
        removeClass(nav, "opened");
        removeClass(nav, opts.navClass);
        removeClass(nav, opts.navClass + "-" + this.index);
        removeClass(htmlEl, opts.navActiveClass);
        nav.removeAttribute("style");
        nav.removeAttribute("aria-hidden");

        removeEvent(window, "resize", this, false);
        removeEvent(window, "focus", this, false);
        removeEvent(document.body, "touchmove", this, false);
        removeEvent(navToggle, "touchstart", this, false);
        removeEvent(navToggle, "touchend", this, false);
        removeEvent(navToggle, "mouseup", this, false);
        removeEvent(navToggle, "keyup", this, false);
        removeEvent(navToggle, "click", this, false);

        if (!opts.customToggle) {
          navToggle.parentNode.removeChild(navToggle);
        } else {
          navToggle.removeAttribute("aria-hidden");
        }
      },

      /**
       * Toggles the navigation open/close
       */
      toggle: function () {
        if (hasAnimFinished === true) {
          if (!navOpen) {
            this.open();
          } else {
            this.close();
          }
        }
      },

      /**
       * Opens the navigation
       */
      open: function () {
        if (!navOpen) {
          removeClass(nav, "closed");
          addClass(nav, "opened");
          addClass(htmlEl, opts.navActiveClass);
          addClass(navToggle, "active");
          nav.style.position = opts.openPos;
          setAttributes(nav, {"aria-hidden": "false"});
          navOpen = true;
          opts.open();
        }
      },

      /**
       * Closes the navigation
       */
      close: function () {
        if (navOpen) {
          addClass(nav, "closed");
          removeClass(nav, "opened");
          removeClass(htmlEl, opts.navActiveClass);
          removeClass(navToggle, "active");
          setAttributes(nav, {"aria-hidden": "true"});

          // If animations are enabled, wait until they finish
          if (opts.animate) {
            hasAnimFinished = false;
            setTimeout(function () {
              nav.style.position = "absolute";
              hasAnimFinished = true;
            }, opts.transition + 10);

          // Animations aren't enabled, we can do these immediately
          } else {
            nav.style.position = "absolute";
          }

          navOpen = false;
          opts.close();
        }
      },

      /**
       * Resize is called on window resize and orientation change.
       * It initializes the CSS styles and height calculations.
       */
      resize: function () {

        // Resize watches navigation toggle's display state
        if (window.getComputedStyle(navToggle, null).getPropertyValue("display") !== "none") {

          isMobile = true;
          setAttributes(navToggle, {"aria-hidden": "false"});

          // If the navigation is hidden
          if (nav.className.match(/(^|\s)closed(\s|$)/)) {
            setAttributes(nav, {"aria-hidden": "true"});
            nav.style.position = "absolute";
          }

          this._createStyles();
          this._calcHeight();
        } else {

          isMobile = false;
          setAttributes(navToggle, {"aria-hidden": "true"});
          setAttributes(nav, {"aria-hidden": "false"});
          nav.style.position = opts.openPos;
          this._removeStyles();
        }
      },

      /**
       * Takes care of all even handling
       *
       * @param  {event} event
       * @return {type} returns the type of event that should be used
       */
      handleEvent: function (e) {
        var evt = e || window.event;

        switch (evt.type) {
        case "touchstart":
          this._onTouchStart(evt);
          break;
        case "touchmove":
          this._onTouchMove(evt);
          break;
        case "touchend":
        case "mouseup":
          this._onTouchEnd(evt);
          break;
        case "click":
          this._preventDefault(evt);
          break;
        case "keyup":
          this._onKeyUp(evt);
          break;
        case "focus":
        case "resize":
          this.resize(evt);
          break;
        }
      },

      /**
       * Initializes the widget
       */
      _init: function () {
        this.index = index++;

        addClass(nav, opts.navClass);
        addClass(nav, opts.navClass + "-" + this.index);
        addClass(nav, "closed");
        hasAnimFinished = true;
        navOpen = false;

        this._closeOnNavClick();
        this._createToggle();
        this._transitions();
        this.resize();

        /**
         * On IE8 the resize event triggers too early for some reason
         * so it's called here again on init to make sure all the
         * calculated styles are correct.
         */
        var self = this;
        setTimeout(function () {
          self.resize();
        }, 20);

        addEvent(window, "resize", this, false);
        addEvent(window, "focus", this, false);
        addEvent(document.body, "touchmove", this, false);
        addEvent(navToggle, "touchstart", this, false);
        addEvent(navToggle, "touchend", this, false);
        addEvent(navToggle, "mouseup", this, false);
        addEvent(navToggle, "keyup", this, false);
        addEvent(navToggle, "click", this, false);

        /**
         * Init callback here
         */
        opts.init();
      },

      /**
       * Creates Styles to the <head>
       */
      _createStyles: function () {
        if (!styleElement.parentNode) {
          styleElement.type = "text/css";
          document.getElementsByTagName("head")[0].appendChild(styleElement);
        }
      },

      /**
       * Removes styles from the <head>
       */
      _removeStyles: function () {
        if (styleElement.parentNode) {
          styleElement.parentNode.removeChild(styleElement);
        }
      },

      /**
       * Creates Navigation Toggle
       */
      _createToggle: function () {

        // If there's no toggle, let's create one
        if (!opts.customToggle) {
          var toggle = document.createElement("a");
          toggle.innerHTML = opts.label;
          setAttributes(toggle, {
            "href": "#",
            "class": "nav-toggle"
          });

          // Determine where to insert the toggle
          if (opts.insert === "after") {
            nav.parentNode.insertBefore(toggle, nav.nextSibling);
          } else {
            nav.parentNode.insertBefore(toggle, nav);
          }

          navToggle = toggle;

        // There is a toggle already, let's use that one
        } else {
          var toggleEl = opts.customToggle.replace("#", "");

          if (document.getElementById(toggleEl)) {
            navToggle = document.getElementById(toggleEl);
          } else if (document.querySelector(toggleEl)) {
            navToggle = document.querySelector(toggleEl);
          } else {
            throw new Error("The custom nav toggle you are trying to select doesn't exist");
          }
        }
      },

      /**
       * Closes the navigation when a link inside is clicked.
       */
      _closeOnNavClick: function () {
        if (opts.closeOnNavClick) {
          var links = nav.getElementsByTagName("a"),
            self = this;
          forEach(links, function (i, el) {
            addEvent(links[i], "click", function () {
              if (isMobile) {
                self.toggle();
              }
            }, false);
          });
        }
      },

      /**
       * Prevents the default functionality.
       *
       * @param  {event} event
       */
      _preventDefault: function(e) {
        if (e.preventDefault) {
          if (e.stopImmediatePropagation) {
            e.stopImmediatePropagation();
          }
          e.preventDefault();
          e.stopPropagation();
          return false;

        // This is strictly for old IE
        } else {
          e.returnValue = false;
        }
      },

      /**
       * On touch start we get the location of the touch.
       *
       * @param  {event} event
       */
      _onTouchStart: function (e) {
        if (!Event.prototype.stopImmediatePropagation) {
          this._preventDefault(e);
        }
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
        this.touchHasMoved = false;

        /**
         * Remove mouseup event completely here to avoid
         * double triggering the event.
         */
        removeEvent(navToggle, "mouseup", this, false);
      },

      /**
       * Check if the user is scrolling instead of tapping.
       *
       * @param  {event} event
       */
      _onTouchMove: function (e) {
        if (Math.abs(e.touches[0].clientX - this.startX) > 10 ||
        Math.abs(e.touches[0].clientY - this.startY) > 10) {
          this.touchHasMoved = true;
        }
      },

      /**
       * On touch end toggle the navigation.
       *
       * @param  {event} event
       */
      _onTouchEnd: function (e) {
        this._preventDefault(e);
        if (!isMobile) {
          return;
        }

        // If the user isn't scrolling
        if (!this.touchHasMoved) {

          // If the event type is touch
          if (e.type === "touchend") {
            this.toggle();
            return;

          // Event type was click, not touch
          } else {
            var evt = e || window.event;

            // If it isn't a right click, do toggling
            if (!(evt.which === 3 || evt.button === 2)) {
              this.toggle();
            }
          }
        }
      },

      /**
       * For keyboard accessibility, toggle the navigation on Enter
       * keypress too.
       *
       * @param  {event} event
       */
      _onKeyUp: function (e) {
        var evt = e || window.event;
        if (evt.keyCode === 13) {
          this.toggle();
        }
      },

      /**
       * Adds the needed CSS transitions if animations are enabled
       */
      _transitions: function () {
        if (opts.animate) {
          var objStyle = nav.style,
            transition = "max-height " + opts.transition + "ms";

          objStyle.WebkitTransition =
          objStyle.MozTransition =
          objStyle.OTransition =
          objStyle.transition = transition;
        }
      },

      /**
       * Calculates the height of the navigation and then creates
       * styles which are later added to the page <head>
       */
      _calcHeight: function () {
        var savedHeight = 0;
        for (var i = 0; i < nav.inner.length; i++) {
          savedHeight += nav.inner[i].offsetHeight;
        }

        var innerStyles = "." + opts.jsClass + " ." + opts.navClass + "-" + this.index + ".opened{max-height:" + savedHeight + "px !important} ." + opts.jsClass + " ." + opts.navClass + "-" + this.index + ".opened.dropdown-active {max-height:9999px !important}";

        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = innerStyles;
        } else {
          styleElement.innerHTML = innerStyles;
        }

        innerStyles = "";
      }

    };

    /**
     * Return new Responsive Nav
     */
    return new ResponsiveNav(el, options);

  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = responsiveNav;
  } else {
    window.responsiveNav = responsiveNav;
  }

}(document, window, 0));