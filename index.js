var test = require('tape');

(function () {
	var arr = [],
	  count = 1,
	  delay = 20,
	  timer,
	  complete;

	timer = function timer() {
		setTimeout(function inner() {
			arr.push(count);

			if(count < 3) {
				count += 1;
				timer();
			} else {
				complete();
			}
		}, delay);
	};

	asyncTest('closure with setTimeout.', function(t) {
		complete = function complete() {
			t.equal(arr.join(','), '1,2,3', 'arr should be [1,2,3]');
			start();
		};

		timer();

		t.equal(
			arr.length, 0,
			'array should be empty until the first timeout.'
		);
	});
})();