var test = require('tape');

test('Order with unintentional side effects', function(t) {
		var cartProto = {
			items: [],

			addItem: function addItem(item) {
				this.items.push(item);
			}
		},

		createCart = function (items) {
			var cart = Object.create(cartProto);
			cart.items = Object.create(items);
			return cart;
		},

		savedCart = createCart(["apple", "pear", "orange"]),

		session = {
			get: function get() {
				return this.cart;
			},
			cart: createCart(savedCart.items)
		};

		session.cart.addItem('grapefruit');

		t.ok(session.cart.items.indexOf('grapefruit') !== -1, 'Passes: Session cart has grapefruit.');

		t.ok(savedCart.items.indexOf('grapefruit') === -1, 'Fails: the stored cart is unchanged.');
		t.end();
});