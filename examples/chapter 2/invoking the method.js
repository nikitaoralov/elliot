var test = require('tape');

function highPass(number, cutoff) {
	cutoff = cutoff || this.cutoff;
	return (number >= cutoff);
}

var filter1 = {
	highPass: highPass,
	cutoff: 5
  },
  filter2 = {
    // No highpass here
    cutoff: 3  
  };

test('Invoking a method', function(t) {
	var result1 = filter1.highPass(3),
	result2 = highPass.call(filter2, 3),
	result3 = filter1.highPass(6);

	t.equal(result1, false, '3 >= filter1.cutoff should be false.');
	t.equal(result2, true, '3 >= filter2.cutoff should be true.');
	t.equal(result3, true, '6 >= filter1.cutoff should be true.');
	t.end();
});
