var test = require('tape');

test('Function declaration hoisting', function(t) {
	function number() {
		return 1;
	}

	(function() {
		t.equal(number(), 2, 'Inner scope wins.');
		
		function number() {
			return 2;
		}
	})();

	t.equal(number(), 1, 'Outer scope still works.');
	
	t.end();
});
