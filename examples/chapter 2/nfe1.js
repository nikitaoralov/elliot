var test = require('tape');

test('Function scope', function(t) {
	var testDeclaration = false, foo;

	function bar(arg1, bleed) {
		if(bleed) {
			t.ok(false, 'Declaration bar() should NOT be callable from inside the expression.');
		} else {
			t.ok(true, 'Declaration bar() should be called outside the expression.');
		}
		testDeclaration = true;
	}

	foo = function bar(declaration, recurse) {
		if(recurse) {
			t.ok(true, 'Expression bar() should support scope safe recursion');
		} else if (declaration === true) {
			t.ok(true, 'Expression bar() should be callable via foo()');
			bar(false, true);
		} else {
			t.ok(false, 'Expression bar() should NOT be callable outside the expression');
		}
	};

	bar();
	foo(true);
	t.ok(testDeclaration, 'The bar() declaration should NOT get overriden by the expression bar()');
	t.end();
});