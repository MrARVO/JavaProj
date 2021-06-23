(function() {
	function f(t, type) {
		if (type == 0) {
			return 5 * t / Math.PI - 5;
		} else {
			return t;
		}
	}

	var panelMainDiv = document.getElementById('plot3d_main');
	panelMainDiv.addEventListener('mouseover', eulerface.lockScroll);
	panelMainDiv.addEventListener('mouseout', eulerface.unlockScroll);
	
	var panelCondDiv = document.getElementById('plot3d_cond');
	panelCondDiv.addEventListener('mouseover', eulerface.lockScroll);
	panelCondDiv.addEventListener('mouseout', eulerface.unlockScroll);

	sel1 = new eulerface.Select(document.getElementById('sel1'));

	/*for (var k = 1; k <= 5; k++) {
		sel1.addOption(document.getElementById('opt-la-' + k), k - 1);
	}*/

	sel1.addOption(document.getElementById('opt-la-1'), 0);
    sel1.addOption(document.getElementById('opt-la-2'), 1);
	sel1.addOption(document.getElementById('opt-la-3'), 2);
	sel1.addOption(document.getElementById('opt-la-4'), 3);
	//sel1.addOption(document.getElementById('opt-la-5'), 'la-5');
	//sel1.addOption(document.getElementById('opt-la-6'), 'la-6');
	//sel1.addOption(document.getElementById('opt-la-7'), 'la-7');
	sel1.addOption(document.getElementById('opt-la-8'), 7);
	//sel1.addOption(document.getElementById('opt-la-9'), 'la-9');
	//sel1.addOption(document.getElementById('opt-la-10'), 'la-10');
	
	document.getElementById('options').addEventListener('click', animate);

	var animate_forward = true;
	var inter_type = grafar.set([0]).select(); // 0 - explicit, 1 - polar
	var cond_type  = grafar.set([0]).select(); // 0 - explicit, 1 - polar

	var prob_num = sel1.container.getAttribute('value');
	var p = grafar.set([prob_num]).select();
	
	var pan3d_main = new grafar.Panel(document.getElementById('plot3d_main')),
		pan3d_anim = new grafar.Panel(document.getElementById('plot3d_cond'));

	pan3d_main.camera.position.set(-8, 8, 8);
	pan3d_anim.camera.position.set(-8, 8, 8);
	
	var x = grafar.range(-3, 3, 60).select();
	var y = grafar.range(-3, 3, 60).select();
	var z = grafar.map([x, y, p], (x, y, p) => problems[p].eqn_comp(x, y));
	grafar.pin({axes: [x, y, z], color: [160.0/255.0, 255.0/255.0, 255.0/255.0]}, pan3d_main);

	const t1 = grafar.seq(0, 2 * Math.PI, 500).select();
	var x_plate = grafar.map([t1, p, cond_type], (t, p, type) => problems[p].conditions_comp[1](f(t, type)));
	var y_plate = grafar.map([t1, p, cond_type], (t, p, type) => problems[p].conditions_comp[0](f(t, type)));
	var z_plate = grafar.range(-10, 10, 50).select();
	grafar.pin({axes: [x_plate, y_plate, z_plate], color: [120.0/255.0, 120.0/255.0, 120.0/255.0]}, pan3d_main);

	const t2 = grafar.seq(0, 2 * Math.PI, 5000).select();
	var x_func = grafar.map([t2, p, inter_type], (t, p, type) => problems[p].intersection[2](f(t, type)));
	var y_func = grafar.map([t2, p, inter_type], (t, p, type) => problems[p].intersection[0](f(t, type)));
	var z_func = grafar.map([x_func, y_func, p], (x, y, p) => problems[p].intersection[1](x, y));
	grafar.pin({axes: [x_func, y_func, z_func], color: [255.0/255.0, 140.0/255.0, 0]}, pan3d_main);
	grafar.pin({axes: [x_func, y_func, z_func], color: [255.0/255.0, 140.0/255.0, 0]}, pan3d_anim);
	
	var lmbd = problems[prob_num].lambda;
	var cur_lmbd_1 = grafar.set([lmbd[0]]).select();
	var cur_lmbd_2 = grafar.set([lmbd[lmbd.length - 1]]).select();
	const frame_rate = 20;
	var frame_counter = 0;
	var mult = grafar.set([frame_counter]).select();

	var x_anim = grafar.range(-3, 3, 60).select();
	var y_anim = grafar.range(-3, 3, 60).select();
	var z_anim_1 = grafar.map([x_anim, y_anim, cur_lmbd_1, mult, frame_rate, p], (x, y, lmbd, mult, frame_rate, p) => problems[p].eqn_comp(x, y) + (lmbd * mult / frame_rate)*problems[p].conditions_form[0](x, y));
	var z_anim_2 = grafar.map([x_anim, y_anim, cur_lmbd_2, mult, frame_rate, p], (x, y, lmbd, mult, frame_rate, p) => problems[p].eqn_comp(x, y) + (lmbd * mult / frame_rate)*problems[p].conditions_form[0](x, y));
	grafar.pin({axes: [x_anim, y_anim, z_anim_1], color: [160.0/255.0, 255.0/255.0, 255.0/255.0]}, pan3d_anim);
	var color_r = grafar.set([160.0/255.0]).select(),
		color_g = grafar.set([255.0/255.0]).select(),
		color_b = grafar.set([255.0/255.0]).select();
	grafar.pin({axes: [x_anim, y_anim, z_anim_2], color: [color_r, color_g, color_b]}, pan3d_anim);

	hideAllBut = function(container, visible) {
		console.log(container);
		console.log(visible);
		var children = container.children;
		for (var i = 0; i < children.length; i++)
		  children[i].style.display = 'none';
	  	visible.style.display = 'block';
	};
	hideAllBut(document.getElementById('solution1'),
			   document.getElementById('solution-la-2'));

	function updateProblem() {
		prob_num = sel1.container.getAttribute('value');
		grafar.set([prob_num]).into(p);

		var tmp_num = parseInt(prob_num, 10);
		tmp_num += 1;
		console.log('solution-la-' + tmp_num);
		hideAllBut(document.getElementById('solution1'),
				   document.getElementById('solution-la-' + tmp_num));

		lmbd = problems[prob_num].lambda;
		grafar.set([lmbd[0]]).into(cur_lmbd_1);
		grafar.set([lmbd[lmbd.length - 1]]).into(cur_lmbd_2);
		if (lmbd. length == 1) {
			grafar.set([160.0/255.0]).into(color_r);
			grafar.set([255.0/255.0]).into(color_g);
			grafar.set([255.0/255.0]).into(color_b);
		}

		frame_counter = 0;
		grafar.set([frame_counter]).into(mult);
		animate_forward = true;

		if (problems[prob_num].intersect_type == 'explicit') {
			grafar.set([0]).into(inter_type);
		} else {
			grafar.set([1]).into(inter_type);
		}

		if (problems[prob_num].conditions_comp == 'explicit') {
			grafar.set([0]).into(cond_type);
		} else {
			grafar.set([1]).into(cond_type);
		}
	}
	
	function animate() {
		frame_counter = 0;
	
		function frame() {
			frame_counter++;
	
			if (frame_counter <= frame_rate) {
				if (animate_forward) {
					grafar.set([frame_counter]).into(mult);
				} else {
					grafar.set([frame_rate - frame_counter]).into(mult);
				}
	
				window.requestAnimationFrame(frame);
			} else {
				animate_forward = !animate_forward;
			}
		}
		frame();

		if (lmbd. length == 2) {
			if (!animate_forward) {
				grafar.set([160.0/255.0]).into(color_r);
				grafar.set([255.0/255.0]).into(color_g);
				grafar.set([255.0/255.0]).into(color_b);
			} else {
				grafar.set([0]).into(color_r);
				grafar.set([204.0/255.0]).into(color_g);
				grafar.set([0]).into(color_b);
			}
		}
	}
	
	sel1.container.addEventListener('change', updateProblem);
}());