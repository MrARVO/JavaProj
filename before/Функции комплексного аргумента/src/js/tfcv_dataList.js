const ranges = {
	x: {
		min: -2*Math.PI,
		max: 2*Math.PI
	},
	y: {
		min: -2*Math.PI,
		max: 2*Math.PI
	},
	z: {
		min: -2*Math.PI,
		max: 2*Math.PI
	}
}

const func_data = [
{	
	// |sin x| + 1/2 e^|y| = z
	katex_func: "z = \\vert \\sin x \\vert + \\cfrac{1}{2} \\cdot e^{\\vert y \\vert}",

	equation: (x,y,z,r = 1) => {return Math.abs(Math.sin(x)) + 1/2*Math.pow(Math.E, Math.abs(y)) - z},

	param_func: function () {
		const x = grafar.range((this.x && this.x.min) || ranges.x.min, (this.x && this.x.max) || ranges.x.max, 45).select();
		const y = grafar.range((this.y && this.y.min) || ranges.y.min, (this.y && this.y.max) || ranges.y.max, 31).select();
		const zf = grafar.map([x, y], (x, y) => this.equation(x,y,0));

		const x1 = grafar.range((this.x && this.x.min) || ranges.x.min, (this.x && this.x.max) || ranges.x.max, 17).select();
		const y1 = grafar.range((this.y && this.y.min) || ranges.y.min, (this.y && this.y.max) || ranges.y.max, 17).select();
		const zf1 = grafar.map([x1, y1], (x, y) => this.equation(x,y,0));

		return {
			main: [
			    x,
			    y,
			    zf
			],
			skelet: [
				x1,
			    y1,
			    zf1
			]
		};
	},

	y: {
		min: -Math.PI,
		max: Math.PI
	},
	z: {
		min: 0,
		max: 4*Math.PI
	},

	levelset_n: 10000
},{
	// (z+1)/(2z-1)
	katex_func: "f(z) = \\cfrac{z + 1}{2z - 1}",
	katex_info: "- linear fractional transformations",

	equation: (x,y,z) => {return (x+1)/(2*x-1) + (y+1)/(2*y-1) - z},

	param_func: function () {
		const x = grafar.range((this.x && this.x.min) || ranges.x.min, (this.x && this.x.max) || ranges.x.max, 45).select();
		const y = grafar.range((this.y && this.y.min) || ranges.y.min, (this.y && this.y.max) || ranges.y.max, 45).select();
		const zf = grafar.map([x, y], (x, y) => this.equation(x,y,0));

		const x1 = grafar.range((this.x && this.x.min) || ranges.x.min, (this.x && this.x.max) || ranges.x.max, 15).select();
		const y1 = grafar.range((this.y && this.y.min) || ranges.y.min, (this.y && this.y.max) || ranges.y.max, 15).select();
		const zf1 = grafar.map([x1, y1], (x, y) => this.equation(x,y,0));

		return {
			main: [
			    x,
			    y,
			    zf
			],
			skelet: [
				x1,
			    y1,
			    zf1
			]
		};
	},

	z: {
		min: -4*Math.PI,
		max: 4*Math.PI
	}
},{
	// 1/2 (z + 1/z)
	katex_func: "f(z) = \\cfrac{1}{2}\\left(z + \\cfrac{1}{z}\\right)",
	katex_info: "-  Joukowsky transform",

	equation: (x,y,z) => {return 1/2*(x + 1/x) + 1/2*(y + 1/y) - z},

	param_func: function () {
		const x = grafar.range((this.x && this.x.min) || ranges.x.min, (this.x && this.x.max) || ranges.x.max, 45).select();
		const y = grafar.range((this.y && this.y.min) || ranges.y.min, (this.y && this.y.max) || ranges.y.max, 45).select();
		const zf = grafar.map([x, y], (x, y) => this.equation(x,y,0));

		const x1 = grafar.range((this.x && this.x.min) || ranges.x.min, (this.x && this.x.max) || ranges.x.max, 15).select();
		const y1 = grafar.range((this.y && this.y.min) || ranges.y.min, (this.y && this.y.max) || ranges.y.max, 15).select();
		const zf1 = grafar.map([x1, y1], (x, y) => this.equation(x,y,0));

		return {
			main: [
			    x,
			    y,
			    zf
			],
			skelet: [
				x1,
			    y1,
			    zf1
			]
		};
	},

	levelset_n: 8000
},{
	//|tg z|
	katex_func: "f(z) = | \\tg z |",
	katex_info: "-  absolute value of tangent",

	equation: (x,y,z) => {return Math.abs(Math.tan(x)) + Math.abs(Math.tan(y)) - z},

	param_func: function () {
		const x = grafar.range((this.x && this.x.min) || ranges.x.min, (this.x && this.x.max) || ranges.x.max, 45).select();
		const y = grafar.range((this.y && this.y.min) || ranges.y.min, (this.y && this.y.max) || ranges.y.max, 45).select();
		const zf = grafar.map([x, y], (x, y) => this.equation(x,y,0));

		const x1 = grafar.range((this.x && this.x.min) || ranges.x.min, (this.x && this.x.max) || ranges.x.max, 21).select();
		const y1 = grafar.range((this.y && this.y.min) || ranges.y.min, (this.y && this.y.max) || ranges.y.max, 21).select();
		const zf1 = grafar.map([x1, y1], (x, y) => this.equation(x,y,0));

		return {
			main: [
			    x,
			    y,
			    zf
			],
			skelet: [
				x1,
			    y1,
			    zf1
			]
		};
	},

	z: {
		min: 0,
		max: 4*Math.PI
	},

	levelset_n: 10000
},{
	// tg z
	katex_func: "f(z) = \\tg z",
	katex_info: "-  tangent",

	equation: (x,y,z) => {return Math.tan(x) + Math.tan(y) - z},

	param_func: function () {
		const x = grafar.range((this.x && this.x.min) || ranges.x.min, (this.x && this.x.max) || ranges.x.max, 45).select();
		const y = grafar.range((this.y && this.y.min) || ranges.y.min, (this.y && this.y.max) || ranges.y.max, 45).select();
		const zf = grafar.map([x, y], (x, y) => this.equation(x,y,0));

		const x1 = grafar.range((this.x && this.x.min) || ranges.x.min, (this.x && this.x.max) || ranges.x.max, 21).select();
		const y1 = grafar.range((this.y && this.y.min) || ranges.y.min, (this.y && this.y.max) || ranges.y.max, 21).select();
		const zf1 = grafar.map([x1, y1], (x, y) => this.equation(x,y,0));

		return {
			main: [
			    x,
			    y,
			    zf
			],
			skelet: [
				x1,
			    y1,
			    zf1
			]
		};
	},

	levelset_n: 10000
},{
	// 1/(1+z^2)
	katex_func: "f(z) = \\cfrac{1}{1 + z^2}",

	equation: (x,y,z) => {return 1/(1+Math.pow(x, 2)) + 1/(1+Math.pow(y, 2)) - z},

	param_func: function () {
		const x = grafar.range((this.x && this.x.min) || ranges.x.min, (this.x && this.x.max) || ranges.x.max, 45).select();
		const y = grafar.range((this.y && this.y.min) || ranges.y.min, (this.y && this.y.max) || ranges.y.max, 45).select();
		const zf = grafar.map([x, y], (x, y) => this.equation(x,y,0));

		const x1 = grafar.range((this.x && this.x.min) || ranges.x.min, (this.x && this.x.max) || ranges.x.max, 15).select();
		const y1 = grafar.range((this.y && this.y.min) || ranges.y.min, (this.y && this.y.max) || ranges.y.max, 15).select();
		const zf1 = grafar.map([x1, y1], (x, y) => this.equation(x,y,0));

		return {
			main: [
			    x,
			    y,
			    zf
			],
			skelet: [
				x1,
			    y1,
			    zf1
			]
		};
	},

	z: {
		min: 0,
		max: 2
	}
},{
	// |e^{1/z}|
	katex_func: "f(z) = \\vert e^{1/z} \\vert",

	equation: (x,y,z) => {return Math.abs(Math.pow(Math.E, 1/x)) + Math.abs(Math.pow(Math.E, 1/y)) - z},

	param_func: function () {
		const x = grafar.range((this.x && this.x.min) || ranges.x.min, (this.x && this.x.max) || ranges.x.max, 45).select();
		const y = grafar.range((this.y && this.y.min) || ranges.y.min, (this.y && this.y.max) || ranges.y.max, 45).select();
		const zf = grafar.map([x, y], (x, y) => this.equation(x,y,0));

		const x1 = grafar.range((this.x && this.x.min) || ranges.x.min, (this.x && this.x.max) || ranges.x.max, 17).select();
		const y1 = grafar.range((this.y && this.y.min) || ranges.y.min, (this.y && this.y.max) || ranges.y.max, 17).select();
		const zf1 = grafar.map([x1, y1], (x, y) => this.equation(x,y,0));

		return {
			main: [
			    x,
			    y,
			    zf
			],
			skelet: [
				x1,
			    y1,
			    zf1
			]
		};
	},

	z: {
		min: 0
	}
}];
