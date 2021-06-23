function generatePlaneSection(current_obj = {}, options, crossSection) {
	let planeSection = {
		level: 0,
		delta: 0.004
	};

	planeSection.boldset = () => grafar.set([
		planeSection.level - planeSection.delta,
		planeSection.level + planeSection.delta
	]);

	let func_ranges = (v) => {
		const add = 1.5;

    	switch(crossSection.axis) {
		case 0:
			return !(add*options.y.min < v[0] && v[0] < add*options.y.max &&
				add*options.z.min < v[1] && v[1] < add*options.z.max);	
		case 1:
			return !(add*options.x.min < v[0] && v[0] < add*options.x.max &&
				add*options.z.min < v[1] && v[1] < add*options.z.max);
		case 2:
		default:
			return !(add*options.x.min < v[0] && v[0] < add*options.x.max &&
				add*options.y.min < v[1] && v[1] < add*options.y.max);
		}
    };

	let eq = current_obj.equation;
    let funl = a => (v => Math.abs(eq(
    	crossSection.axis === 0 ? a : v[0],
    	crossSection.axis === 1 ? a : (crossSection.axis === 0 ? v[0] : v[1]),
    	crossSection.axis === 2 ? a : v[1]
    	)) + func_ranges (v)
    );

	planeSection.levelset = (b = 0) => grafar.vsolve(funl(b), crossSection.levelset_n, 2);

	planeSection.variables_x = [
		planeSection.boldset().select(),
		planeSection.levelset().select()
	];
	planeSection.levelset_selected_y = planeSection.levelset().select();
	planeSection.variables_y = [
		planeSection.levelset_selected_y[0],
		planeSection.boldset().select(),
		planeSection.levelset_selected_y[1]
	];
	planeSection.variables_z = [
		planeSection.levelset().select(),
		planeSection.boldset().select()
	];

	planeSection.update = (n = 0) => {
		planeSection.level = n;
		let levelset = planeSection.levelset(n);

		switch(crossSection.axis) {
			case 0:
				planeSection.boldset().into(planeSection.variables_x[0]);
				planeSection.levelset(n).into(planeSection.variables_x[1]);
				break;
			case 1:
				planeSection.boldset().into(planeSection.variables_y[1]);
				planeSection.levelset(n).into(planeSection.levelset_selected_y);
				break;
			case 2:
			default:
				planeSection.boldset().into(planeSection.variables_z[1]);
				planeSection.levelset(n).into(planeSection.variables_z[0]);
		}
	}

	return planeSection;
}