function generateCrossSection(current_obj = {}, options) {
	let crossSection = {
		n_count: current_obj.n_count || 300,
		levelset_n: current_obj.levelset_n || 5000,
		level_visible: true,
		axis: 2,
		x: grafar.range(-1 + options.x.min, 1 + options.x.max, 11),
		y: grafar.range(-1 + options.y.min, 1 + options.y.max, 11),
		z: grafar.range(-1 + options.z.min, 1 + options.z.max, 11),
	};

	crossSection.variables = [
		crossSection.x.select(),
	 	crossSection.y.select(),
		grafar.set([0]).select()
	];

	crossSection.update = () => {
		crossSection.x.into(crossSection.variables[0]);
		crossSection.y.into(crossSection.variables[1]);
		crossSection.z.into(crossSection.variables[2]);

		grafar.set([0]).into(crossSection.variables[crossSection.axis]);
	};

	return crossSection;
}