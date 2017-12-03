var test = require('tape');

// var Lightbulb = function() {
// 	this.isOn = false;
//  	},
//  	lightbulb = new Lightbulb();

// Lightbulb.prototype.toggle = function() {
// 	this.isOn = !this.isOn;
// 	return this.isOn;
// };

// Lightbulb.prototype.getState = function getState() {

// };

// test('Prototypes without IIFE', function(t) {
// 	t.equal(lightbulb.toggle(), true, 'Lightbulb turns on.');
// 	t.equal(lightbulb.toggle(), false, 'Lightbulb turns off.');
// 	t.end();
// });

(function () {
	var isOn = false,
	  toggle = function toggle() {
	  	isOn = !isOn;
	  	return isOn;
	  },

	  getState = function getState() {
	  	// Implementation
	  },

	  lightbulb = {
	  	toggle: toggle,
	  	getState: getState
	  };

	  test('Prototypes with IIFE.', function(t) {
	  	t.equal(lightbulb.toggle(), true, 'Lightbulb turns on');
	  	t.equal(lightbulb.toggle(), false, 'Lightbulb turns off');
	  	t.end();
	  });
})();

