let pan3d;
let render_graph = document.getElementById('render');
let grafar_obj_pin;
let grafar_obj_skelet_pin;

const global_options = {
	colors: {
		default: [
			grafar.set([0]).select(),
			grafar.set([0.549]).select(),
			grafar.set([0.941]).select()
		],
		discolored: [
			grafar.range(0,0.85,2).select(),
			grafar.range(0,0.85,2).select(),
			grafar.range(0,0.85,2).select()
		],
		red: [
			grafar.set([1]).select(),
			grafar.set([0]).select(),
			grafar.set([0]).select()
		],
	}
};

let crossSection;
let planeSection;

let crossSection_pin;
let planeSection_pins;


// Clear all panel settings
function clearUITemplates() {
	// crossSection_checkboxRun(false);
	crossSectionCheckOff();
	crossSectionUIRun(false);
}

// Clear grafar render
function clearGrafar() {
	while (render_graph.firstChild) {
		render_graph.removeChild(render_graph.lastChild);
	}

	// grafar_1 = grafar;
	// for (var member in grafar_1) delete grafar_1[member]; // nope

	options = {
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
	};

	crossSection = null;
	planeSection = null;

	grafar_obj_pin = null;
	grafar_obj_skelet_pin = null;
}

// click/initialize new function 
function runNewFunction() {
	clearUITemplates();
	clearGrafar();

	// pan3d = null;
	// if (current_index in functions)

	current_obj = func_data[current_index];
	current_obj_vars = current_obj.param_func();

	pan3d = new grafar.Panel(render_graph);
	grafar_obj_pin = grafar.pin({axes: current_obj_vars.main, color: global_options.colors.default}, pan3d);

	// if there's options

	if (current_obj.x) {
		if (current_obj.x.min !== undefined)
			options.x.min = current_obj.x.min;
		if (current_obj.x.max !== undefined)
			options.x.max = current_obj.x.max;
	}
	if (current_obj.y) {
		if (current_obj.y.min !== undefined)
			options.y.min = current_obj.y.min;
		if (current_obj.y.max !== undefined)
			options.y.max = current_obj.y.max;
	}
	if (current_obj.z) {
		if (current_obj.z.min !== undefined)
			options.z.min = current_obj.z.min;
		if (current_obj.z.max !== undefined)
			options.z.max = current_obj.z.max;
	}

	// // if cross-section is needed
	// if (current_obj.crossSection) {
		// // initiate cross-section
		// crossSection_checkboxRun(true);
		crossSectionCheckLevelOn(true);

		// initiate cross-section
		crossSection = generateCrossSection(current_obj, options);

		crossSection_pin = grafar.pin(crossSection.variables, pan3d);
		crossSection_pin.hide(true);

		// create current object skelet 
		grafar_obj_skelet_pin = grafar.pin({
			axes: current_obj_vars.skelet, 
			color: global_options.colors.discolored},
			pan3d);
		grafar_obj_skelet_pin.hide(true);

		// initiate plane section
		planeSection = generatePlaneSection(current_obj, options, crossSection);

		// push new pin
		planeSection_pins = [
			grafar.pin({
				axes: planeSection.variables_x,
				color: global_options.colors.red
			}, pan3d).hide(true),
			grafar.pin({
				axes: planeSection.variables_y,
				color: global_options.colors.red
			}, pan3d).hide(true),
			grafar.pin({
				axes: planeSection.variables_z,
				color: global_options.colors.red
			}, pan3d).hide(true)
		];
	// }

	current_obj = {};
}

// ==========================================================================================================
// CROSSSECTION
// ==========================================================================================================
const crossSection_slider = document.getElementById('slider-crossSection');
// change slider
crossSection_slider.oninput = function() {
	let num = Number(this.value);
    let grafar_const = grafar.set([num]);

    planeSection.update(num);
	grafar_const.into(crossSection.variables[crossSection.axis]);

    grafar.refresh();
}

// cross-section on/off
function crossSectionRun(flag = true) {
	if (flag) {
		const range_addition = 0.05;
		let ax = {};

		switch(crossSection.axis) {
			case 0:
				ax = options.x;
				break;
			case 1:
				ax = options.y;
				break;
			case 2:
			default:
				ax = options.z;
		}

		crossSection_slider.step = (ax.max - ax.min) / crossSection.n_count;
		crossSection_slider.min = ax.min - range_addition;
		crossSection_slider.max = ax.max + range_addition;
		crossSection_slider.value = 0;

		crossSection_pin.hide(!crossSection.level_visible);
	} else {
		crossSection_pin.hide(true);
	}

	planeSectionAxisRun(flag);
	grafarObjDiscolor(flag);
}

// update cross-section axis
function crossSectionAxis() {
	crossSection.update();
	planeSectionAxisRun();
}

// make visible only lines of object
function grafarObjDiscolor(flag = true) {
	grafar_obj_pin.hide(flag);
	grafar_obj_skelet_pin.hide(!flag); // you can't do better :(
}


// change cross-section axis and refresh grafar
function crossSectionRadioAxisChanged(radio) {
	planeSectionAxisRun(false);

	switch(radio.value) {
		case 'x':
			crossSection.axis = 0;
			break;
		case 'y':
			crossSection.axis = 1;
			break;
		case 'z':
		default:
			crossSection.axis = 2;
	}

	crossSectionAxis();
    crossSectionRun(true);
    grafar.refresh();
}

// update plane section axis and make it visible or not
function planeSectionAxisRun(flag = true) {
	planeSection_pins[crossSection.axis].hide(!flag);

	if (flag) planeSection.update(0);
}

// switch cross-section's level visibility
function crossSectionLevelRun(flag = true) {
	crossSection.level_visible = flag;
	crossSection_pin.hide(!flag);
}


// ==========================================================================================================
// START
// ==========================================================================================================
function firstStart() {
    dataList.children[current_index].classList.add('active');
    updateHeaderPanel();
    runNewFunction();
}

let current_obj = {};
let current_obj_vars = {};
clearGrafar();
let current_index = 0;
firstStart(current_index);
