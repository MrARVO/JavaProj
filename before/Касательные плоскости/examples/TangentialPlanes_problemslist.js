var problems = [
	{	id: 'la-1',
		eqn: 'z == sin(x) + cos(y)',
		eqn_comp: function(x, y) {
			return Math.sin(x) + Math.cos(y);
		}
	},
	{	id: 'la-6',
		eqn: 'z == sin(x) * cos(y)',
		eqn_comp: function(x, y) {
			return 1.15 * Math.sin(x) * Math.cos(y);
		}
	},
	{	id: 'la-3',
		eqn: 'z == x*sin(y) + y*cos(x)',
		eqn_comp: function(x, y) {
			return 0.33*x * Math.sin(y) + 0.33*y * Math.cos(x);
		}
	},
	{	id: 'la-4',
		eqn: 'z == x*sin(x) + y*cos(y)',
		eqn_comp: function(x, y) {
			return 0.33*x * Math.sin(x) + 0.33*y * Math.cos(y);
		}
	},
	{	id: 'la-5',
		eqn: 'z == \frac{sin(x+y)}{x+y}',
		eqn_comp: function(x, y) {
			if (x == 0 && y == 0)
				return 1.5;
			else if (x == -y)
				return 1.5;
			return 1.5 * Math.sin(x + y)/ (x + y);
		}
	},
	{	id: 'la-2',
		eqn: 'z == \frac{1}{2\pi}e^{-\frac{xy}{2}}',
		eqn_comp: function(x, y) {
			return 4*Math.exp((-x*x - y*y) / 8);
		}
	}
];