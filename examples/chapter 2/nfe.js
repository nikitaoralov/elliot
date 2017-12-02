var test = require('tape');

test('Named function expressions.', function(t) {
	t.plan(2);
	var a = function x () {
		t.ok(x, 'x() is usable inside the function.');
	};

	a();

	try {
		x();
	} catch (e) {
		t.ok(true, 'x() is undefined outside the function.');
	}
});