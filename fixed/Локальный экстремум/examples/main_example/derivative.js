(function() {
    function f(x, y, i) {
        return problems[i].eqn_comp(x, y);
    }

	var panelMainDiv = document.getElementById('plot3d_main');
		panelMainDiv.addEventListener('mouseover', eulerface.lockScroll);
		panelMainDiv.addEventListener('mouseout', eulerface.unlockScroll);
		
	var pan3d_main = new grafar.Panel(document.getElementById('plot3d_main'));
	
	pan3d_main.camera.position.set(10, 2, -2);
	
    sel1 = new eulerface.Select(document.getElementById('sel1'));
    	
	for (var k = 1; k <= problems.length; k++) {
		if (k != 6) {
		    sel1.addOption(document.getElementById('opt-la-' + k), k - 1);
		}
	}

    var prob_num = sel1.container.getAttribute('value');

    var p = grafar.set([prob_num]).select();
    var x = grafar.range(-10, 10, 200).select();
    var y = grafar.range(-10, 10, 200).select();
    var z = grafar.map([x, y, p], (x, y, p) => f(x, y, p));
    grafar.pin({axes: [x, y, z], color: [170.0/255.0, 255.0/255.0, 180.0/255.0]}, pan3d_main);

    // max extr
    var x_max_1 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_max_1 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m1 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_max_1 = grafar.seq(z_m1 - 0.05, z_m1 + 0.05, 21).select();
    grafar.pin({axes: [x_max_1, y_max_1, z_max_1], color: [255.0/255.0, 128.0/255.0, 0]}, pan3d_main);

    var x_max_2 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_max_2 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m2 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_max_2 = grafar.seq(z_m2 - 0.05, z_m2 + 0.05, 21).select();
    grafar.pin({axes: [x_max_2, y_max_2, z_max_2], color: [255.0/255.0, 128.0/255.0, 0]}, pan3d_main);

    var x_max_3 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_max_3 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m3 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_max_3 = grafar.seq(z_m3 - 0.05, z_m3 + 0.05, 21).select();
    grafar.pin({axes: [x_max_3, y_max_3, z_max_3], color: [255.0/255.0, 128.0/255.0, 0]}, pan3d_main);

    var x_max_4 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_max_4 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m4 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_max_4 = grafar.seq(z_m4 - 0.05, z_m4 + 0.05, 21).select();
    grafar.pin({axes: [x_max_4, y_max_4, z_max_4], color: [255.0/255.0, 128.0/255.0, 0]}, pan3d_main);

    var x_max_5 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_max_5 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m5 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_max_5 = grafar.seq(z_m5 - 0.05, z_m5 + 0.05, 21).select();
    grafar.pin({axes: [x_max_5, y_max_5, z_max_5], color: [255.0/255.0, 128.0/255.0, 0]}, pan3d_main);

    var x_max_6 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_max_6 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m6 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_max_6 = grafar.seq(z_m6 - 0.05, z_m6 + 0.05, 21).select();
    grafar.pin({axes: [x_max_6, y_max_6, z_max_6], color: [255.0/255.0, 128.0/255.0, 0]}, pan3d_main);

    var x_max_7 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_max_7 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m7 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_max_7 = grafar.seq(z_m7 - 0.05, z_m7 + 0.05, 21).select();
    grafar.pin({axes: [x_max_7, y_max_7, z_max_7], color: [255.0/255.0, 128.0/255.0, 0]}, pan3d_main);

    var x_max_8 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_max_8 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m8 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_max_8 = grafar.seq(z_m8 - 0.05, z_m8 + 0.05, 21).select();
    grafar.pin({axes: [x_max_8, y_max_8, z_max_8], color: [255.0/255.0, 128.0/255.0, 0]}, pan3d_main);

    var x_max_9 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_max_9 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m9 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
    var z_max_9 = grafar.seq(z_m9 - 0.05, z_m9 + 0.05, 21).select();
    grafar.pin({axes: [x_max_9, y_max_9, z_min_9], color: [255.0/255.0, 128.0/255.0, 0]}, pan3d_main);

    // min extr
    var x_min_1 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_min_1 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m1 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_min_1 = grafar.seq(z_m1 - 0.05, z_m1 + 0.05, 21).select();
    grafar.pin({axes: [x_min_1, y_min_1, z_min_1], color: [255.0/255.0, 0, 0]}, pan3d_main);

    var x_min_2 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_min_2 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m2 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_min_2 = grafar.seq(z_m2 - 0.05, z_m2 + 0.05, 21).select();
    grafar.pin({axes: [x_min_2, y_min_2, z_min_2], color: [255.0/255.0, 0, 0]}, pan3d_main);

    var x_min_3 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_min_3 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m3 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_min_3 = grafar.seq(z_m3 - 0.05, z_m3 + 0.05, 21).select();
    grafar.pin({axes: [x_min_3, y_min_3, z_min_3], color: [255.0/255.0, 0, 0]}, pan3d_main);

    var x_min_4 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_min_4 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m4 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_min_4 = grafar.seq(z_m4 - 0.05, z_m4 + 0.05, 21).select();
    grafar.pin({axes: [x_min_4, y_min_4, z_min_4], color: [255.0/255.0, 0, 0]}, pan3d_main);

    var x_min_5 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_min_5 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m5 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_min_5 = grafar.seq(z_m5 - 0.05, z_m5 + 0.05, 21).select();
    grafar.pin({axes: [x_min_5, y_min_5, z_min_5], color: [255.0/255.0, 0, 0]}, pan3d_main);

    var x_min_6 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_min_6 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m6 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_min_6 = grafar.seq(z_m6 - 0.05, z_m6 + 0.05, 21).select();
    grafar.pin({axes: [x_min_6, y_min_6, z_min_6], color: [255.0/255.0, 0, 0]}, pan3d_main);

    var x_min_7 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_min_7 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m7 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_min_7 = grafar.seq(z_m7 - 0.05, z_m7 + 0.05, 21).select();
    grafar.pin({axes: [x_min_7, y_min_7, z_min_7], color: [255.0/255.0, 0, 0]}, pan3d_main);

    var x_min_8 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_min_8 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m8 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_min_8 = grafar.seq(z_m8 - 0.05, z_m8 + 0.05, 21).select();
    grafar.pin({axes: [x_min_8, y_min_8, z_min_8], color: [255.0/255.0, 0, 0]}, pan3d_main);

    var x_min_9 = grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).select();
    var y_min_9 = grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).select();
    var z_m9 = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
    var z_min_9 = grafar.seq(z_m9 - 0.05, z_m9 + 0.05, 21).select();
    grafar.pin({axes: [x_min_9, y_min_9, z_min_9], color: [255.0/255.0, 0, 0]}, pan3d_main);

	function updateProblem() {
        prob_num = sel1.container.getAttribute('value');
        grafar.set([prob_num]).into(p);

        var z_cur = 0;

        // max extr update
        var n_max = problems[prob_num].N_max;
        if (n_max == 0) {
            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_max_1);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_max_1);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_1);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_max_2);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_max_2);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_2);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_max_3);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_max_3);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_3);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_max_4);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_max_4);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_4);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_max_5);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_max_5);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_5);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_max_6);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_max_6);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_6);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_max_7);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_max_7);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_7);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_max_8);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_max_8);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_8);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_max_9);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_max_9);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_9);

        } else if (n_max == 1) {
            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_1);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_1);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_1);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_2);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_2);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_2);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_3);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_3);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_3);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_4);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_4);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_4);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_5);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_5);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_5);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_6);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_6);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_6);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_7);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_7);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_7);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_8);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_8);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_8);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_9);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_9);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_9);

        } else if (n_max == 2) {
            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_1);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_1);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_1);

            grafar.seq(problems[prob_num].extr_points_max.x[1] - 0.05, problems[prob_num].extr_points_max.x[1] + 0.05, 21).into(x_max_2);
            grafar.seq(problems[prob_num].extr_points_max.y[1] - 0.05, problems[prob_num].extr_points_max.y[1] + 0.05, 21).into(y_max_2);
            z_cur = f(problems[prob_num].extr_points_max.x[1], problems[prob_num].extr_points_max.y[1], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_2);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_3);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_3);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_3);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_4);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_4);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_4);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_5);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_5);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_5);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_6);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_6);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_6);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_7);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_7);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_7);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_8);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_8);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_8);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_9);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_9);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_9);

        } else if (n_max == 3) {
            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_1);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_1);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_1);

            grafar.seq(problems[prob_num].extr_points_max.x[1] - 0.05, problems[prob_num].extr_points_max.x[1] + 0.05, 21).into(x_max_2);
            grafar.seq(problems[prob_num].extr_points_max.y[1] - 0.05, problems[prob_num].extr_points_max.y[1] + 0.05, 21).into(y_max_2);
            z_cur = f(problems[prob_num].extr_points_max.x[1], problems[prob_num].extr_points_max.y[1], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_2);

            grafar.seq(problems[prob_num].extr_points_max.x[2] - 0.05, problems[prob_num].extr_points_max.x[2] + 0.05, 21).into(x_max_3);
            grafar.seq(problems[prob_num].extr_points_max.y[2] - 0.05, problems[prob_num].extr_points_max.y[2] + 0.05, 21).into(y_max_3);
            z_cur = f(problems[prob_num].extr_points_max.x[2], problems[prob_num].extr_points_max.y[2], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_3);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_4);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_4);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_4);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_5);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_5);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_5);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_6);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_6);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_6);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_7);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_7);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_7);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_8);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_8);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_8);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_9);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_9);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_9);

        } else if (n_max == 4) {
            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_1);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_1);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_1);

            grafar.seq(problems[prob_num].extr_points_max.x[1] - 0.05, problems[prob_num].extr_points_max.x[1] + 0.05, 21).into(x_max_2);
            grafar.seq(problems[prob_num].extr_points_max.y[1] - 0.05, problems[prob_num].extr_points_max.y[1] + 0.05, 21).into(y_max_2);
            z_cur = f(problems[prob_num].extr_points_max.x[1], problems[prob_num].extr_points_max.y[1], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_2);

            grafar.seq(problems[prob_num].extr_points_max.x[2] - 0.05, problems[prob_num].extr_points_max.x[2] + 0.05, 21).into(x_max_3);
            grafar.seq(problems[prob_num].extr_points_max.y[2] - 0.05, problems[prob_num].extr_points_max.y[2] + 0.05, 21).into(y_max_3);
            z_cur = f(problems[prob_num].extr_points_max.x[2], problems[prob_num].extr_points_max.y[2], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_3);

            grafar.seq(problems[prob_num].extr_points_max.x[3] - 0.05, problems[prob_num].extr_points_max.x[3] + 0.05, 21).into(x_max_4);
            grafar.seq(problems[prob_num].extr_points_max.y[3] - 0.05, problems[prob_num].extr_points_max.y[3] + 0.05, 21).into(y_max_4);
            z_cur = f(problems[prob_num].extr_points_max.x[3], problems[prob_num].extr_points_max.y[3], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_4);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_5);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_5);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_5);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_6);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_6);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_6);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_7);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_7);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_7);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_8);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_8);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_8);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_9);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_9);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_9);

        } else {
            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_max_1);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_max_1);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_1);

            grafar.seq(problems[prob_num].extr_points_max.x[1] - 0.05, problems[prob_num].extr_points_max.x[1] + 0.05, 21).into(x_max_2);
            grafar.seq(problems[prob_num].extr_points_max.y[1] - 0.05, problems[prob_num].extr_points_max.y[1] + 0.05, 21).into(y_max_2);
            z_cur = f(problems[prob_num].extr_points_max.x[1], problems[prob_num].extr_points_max.y[1], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_2);

            grafar.seq(problems[prob_num].extr_points_max.x[2] - 0.05, problems[prob_num].extr_points_max.x[2] + 0.05, 21).into(x_max_3);
            grafar.seq(problems[prob_num].extr_points_max.y[2] - 0.05, problems[prob_num].extr_points_max.y[2] + 0.05, 21).into(y_max_3);
            z_cur = f(problems[prob_num].extr_points_max.x[2], problems[prob_num].extr_points_max.y[2], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_3);

            grafar.seq(problems[prob_num].extr_points_max.x[3] - 0.05, problems[prob_num].extr_points_max.x[3] + 0.05, 21).into(x_max_4);
            grafar.seq(problems[prob_num].extr_points_max.y[3] - 0.05, problems[prob_num].extr_points_max.y[3] + 0.05, 21).into(y_max_4);
            z_cur = f(problems[prob_num].extr_points_max.x[3], problems[prob_num].extr_points_max.y[3], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_4);

            grafar.seq(problems[prob_num].extr_points_max.x[4] - 0.05, problems[prob_num].extr_points_max.x[4] + 0.05, 21).into(x_max_5);
            grafar.seq(problems[prob_num].extr_points_max.y[4] - 0.05, problems[prob_num].extr_points_max.y[4] + 0.05, 21).into(y_max_5);
            z_cur = f(problems[prob_num].extr_points_max.x[4], problems[prob_num].extr_points_max.y[4], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_5);

            grafar.seq(problems[prob_num].extr_points_max.x[5] - 0.05, problems[prob_num].extr_points_max.x[5] + 0.05, 21).into(x_max_6);
            grafar.seq(problems[prob_num].extr_points_max.y[5] - 0.05, problems[prob_num].extr_points_max.y[5] + 0.05, 21).into(y_max_6);
            z_cur = f(problems[prob_num].extr_points_max.x[5], problems[prob_num].extr_points_max.y[5], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_6);

            grafar.seq(problems[prob_num].extr_points_max.x[6] - 0.05, problems[prob_num].extr_points_max.x[6] + 0.05, 21).into(x_max_7);
            grafar.seq(problems[prob_num].extr_points_max.y[6] - 0.05, problems[prob_num].extr_points_max.y[6] + 0.05, 21).into(y_max_7);
            z_cur = f(problems[prob_num].extr_points_max.x[6], problems[prob_num].extr_points_max.y[6], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_7);

            grafar.seq(problems[prob_num].extr_points_max.x[7] - 0.05, problems[prob_num].extr_points_max.x[7] + 0.05, 21).into(x_max_8);
            grafar.seq(problems[prob_num].extr_points_max.y[7] - 0.05, problems[prob_num].extr_points_max.y[7] + 0.05, 21).into(y_max_8);
            z_cur = f(problems[prob_num].extr_points_max.x[7], problems[prob_num].extr_points_max.y[7], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_8);

            grafar.seq(problems[prob_num].extr_points_max.x[8] - 0.05, problems[prob_num].extr_points_max.x[8] + 0.05, 21).into(x_max_9);
            grafar.seq(problems[prob_num].extr_points_max.y[8] - 0.05, problems[prob_num].extr_points_max.y[8] + 0.05, 21).into(y_max_9);
            z_cur = f(problems[prob_num].extr_points_max.x[8], problems[prob_num].extr_points_max.y[8], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_max_9);
        }

        // min extr update
        var n_min = problems[prob_num].N_min;
        if (n_min == 0) {
            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_min_1);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_min_1);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_1);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_min_2);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_min_2);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_2);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_min_3);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_min_3);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_3);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_min_4);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_min_4);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_4);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_min_5);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_min_5);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_5);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_min_6);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_min_6);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_6);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_min_7);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_min_7);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_7);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_min_8);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_min_8);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_8);

            grafar.seq(problems[prob_num].extr_points_max.x[0] - 0.05, problems[prob_num].extr_points_max.x[0] + 0.05, 21).into(x_min_9);
            grafar.seq(problems[prob_num].extr_points_max.y[0] - 0.05, problems[prob_num].extr_points_max.y[0] + 0.05, 21).into(y_min_9);
            z_cur = f(problems[prob_num].extr_points_max.x[0], problems[prob_num].extr_points_max.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_9);

        } else if (n_min == 1) {
            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_1);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_1);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_1);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_2);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_2);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_2);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_3);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_3);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_3);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_4);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_4);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_4);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_5);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_5);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_5);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_6);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_6);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_6);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_7);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_7);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_7);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_8);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_8);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_8);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_9);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_9);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_9);

        } else if (n_min == 2) {
            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_1);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_1);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_1);

            grafar.seq(problems[prob_num].extr_points_min.x[1] - 0.05, problems[prob_num].extr_points_min.x[1] + 0.05, 21).into(x_min_2);
            grafar.seq(problems[prob_num].extr_points_min.y[1] - 0.05, problems[prob_num].extr_points_min.y[1] + 0.05, 21).into(y_min_2);
            z_cur = f(problems[prob_num].extr_points_min.x[1], problems[prob_num].extr_points_min.y[1], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_2);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_3);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_3);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_3);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_4);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_4);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_4);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_5);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_5);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_5);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_6);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_6);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_6);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_7);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_7);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_7);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_8);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_8);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_8);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_9);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_9);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_9);

        } else if (n_min == 3) {
            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_1);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_1);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_1);

            grafar.seq(problems[prob_num].extr_points_min.x[1] - 0.05, problems[prob_num].extr_points_min.x[1] + 0.05, 21).into(x_min_2);
            grafar.seq(problems[prob_num].extr_points_min.y[1] - 0.05, problems[prob_num].extr_points_min.y[1] + 0.05, 21).into(y_min_2);
            z_cur = f(problems[prob_num].extr_points_min.x[1], problems[prob_num].extr_points_min.y[1], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_2);

            grafar.seq(problems[prob_num].extr_points_min.x[2] - 0.05, problems[prob_num].extr_points_min.x[2] + 0.05, 21).into(x_min_3);
            grafar.seq(problems[prob_num].extr_points_min.y[2] - 0.05, problems[prob_num].extr_points_min.y[2] + 0.05, 21).into(y_min_3);
            z_cur = f(problems[prob_num].extr_points_min.x[2], problems[prob_num].extr_points_min.y[2], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_3);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_4);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_4);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_4);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_5);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_5);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_5);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_6);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_6);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_6);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_7);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_7);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_7);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_8);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_8);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_8);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_9);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_9);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_9);

        } else if (n_min == 4) {
            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_1);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_1);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_1);

            grafar.seq(problems[prob_num].extr_points_min.x[1] - 0.05, problems[prob_num].extr_points_min.x[1] + 0.05, 21).into(x_min_2);
            grafar.seq(problems[prob_num].extr_points_min.y[1] - 0.05, problems[prob_num].extr_points_min.y[1] + 0.05, 21).into(y_min_2);
            z_cur = f(problems[prob_num].extr_points_min.x[1], problems[prob_num].extr_points_min.y[1], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_2);

            grafar.seq(problems[prob_num].extr_points_min.x[2] - 0.05, problems[prob_num].extr_points_min.x[2] + 0.05, 21).into(x_min_3);
            grafar.seq(problems[prob_num].extr_points_min.y[2] - 0.05, problems[prob_num].extr_points_min.y[2] + 0.05, 21).into(y_min_3);
            z_cur = f(problems[prob_num].extr_points_min.x[2], problems[prob_num].extr_points_min.y[2], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_3);

            grafar.seq(problems[prob_num].extr_points_min.x[3] - 0.05, problems[prob_num].extr_points_min.x[3] + 0.05, 21).into(x_min_4);
            grafar.seq(problems[prob_num].extr_points_min.y[3] - 0.05, problems[prob_num].extr_points_min.y[3] + 0.05, 21).into(y_min_4);
            z_cur = f(problems[prob_num].extr_points_min.x[3], problems[prob_num].extr_points_min.y[3], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_4);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_5);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_5);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_5);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_6);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_6);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_6);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_7);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_7);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_7);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_8);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_8);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_8);

            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_9);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_9);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_9);

        } else {
            grafar.seq(problems[prob_num].extr_points_min.x[0] - 0.05, problems[prob_num].extr_points_min.x[0] + 0.05, 21).into(x_min_1);
            grafar.seq(problems[prob_num].extr_points_min.y[0] - 0.05, problems[prob_num].extr_points_min.y[0] + 0.05, 21).into(y_min_1);
            z_cur = f(problems[prob_num].extr_points_min.x[0], problems[prob_num].extr_points_min.y[0], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_1);

            grafar.seq(problems[prob_num].extr_points_min.x[1] - 0.05, problems[prob_num].extr_points_min.x[1] + 0.05, 21).into(x_min_2);
            grafar.seq(problems[prob_num].extr_points_min.y[1] - 0.05, problems[prob_num].extr_points_min.y[1] + 0.05, 21).into(y_min_2);
            z_cur = f(problems[prob_num].extr_points_min.x[1], problems[prob_num].extr_points_min.y[1], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_2);

            grafar.seq(problems[prob_num].extr_points_min.x[2] - 0.05, problems[prob_num].extr_points_min.x[2] + 0.05, 21).into(x_min_3);
            grafar.seq(problems[prob_num].extr_points_min.y[2] - 0.05, problems[prob_num].extr_points_min.y[2] + 0.05, 21).into(y_min_3);
            z_cur = f(problems[prob_num].extr_points_min.x[2], problems[prob_num].extr_points_min.y[2], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_3);

            grafar.seq(problems[prob_num].extr_points_min.x[3] - 0.05, problems[prob_num].extr_points_min.x[3] + 0.05, 21).into(x_min_4);
            grafar.seq(problems[prob_num].extr_points_min.y[3] - 0.05, problems[prob_num].extr_points_min.y[3] + 0.05, 21).into(y_min_4);
            z_cur = f(problems[prob_num].extr_points_min.x[3], problems[prob_num].extr_points_min.y[3], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_4);

            grafar.seq(problems[prob_num].extr_points_min.x[4] - 0.05, problems[prob_num].extr_points_min.x[4] + 0.05, 21).into(x_min_5);
            grafar.seq(problems[prob_num].extr_points_min.y[4] - 0.05, problems[prob_num].extr_points_min.y[4] + 0.05, 21).into(y_min_5);
            z_cur = f(problems[prob_num].extr_points_min.x[4], problems[prob_num].extr_points_min.y[4], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_5);

            grafar.seq(problems[prob_num].extr_points_min.x[5] - 0.05, problems[prob_num].extr_points_min.x[5] + 0.05, 21).into(x_min_6);
            grafar.seq(problems[prob_num].extr_points_min.y[5] - 0.05, problems[prob_num].extr_points_min.y[5] + 0.05, 21).into(y_min_6);
            z_cur = f(problems[prob_num].extr_points_min.x[5], problems[prob_num].extr_points_min.y[5], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_6);

            grafar.seq(problems[prob_num].extr_points_min.x[6] - 0.05, problems[prob_num].extr_points_min.x[6] + 0.05, 21).into(x_min_7);
            grafar.seq(problems[prob_num].extr_points_min.y[6] - 0.05, problems[prob_num].extr_points_min.y[6] + 0.05, 21).into(y_min_7);
            z_cur = f(problems[prob_num].extr_points_min.x[6], problems[prob_num].extr_points_min.y[6], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_7);

            grafar.seq(problems[prob_num].extr_points_min.x[7] - 0.05, problems[prob_num].extr_points_min.x[7] + 0.05, 21).into(x_min_8);
            grafar.seq(problems[prob_num].extr_points_min.y[7] - 0.05, problems[prob_num].extr_points_min.y[7] + 0.05, 21).into(y_min_8);
            z_cur = f(problems[prob_num].extr_points_min.x[7], problems[prob_num].extr_points_min.y[7], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_8);

            grafar.seq(problems[prob_num].extr_points_min.x[8] - 0.05, problems[prob_num].extr_points_min.x[8] + 0.05, 21).into(x_min_9);
            grafar.seq(problems[prob_num].extr_points_min.y[8] - 0.05, problems[prob_num].extr_points_min.y[8] + 0.05, 21).into(y_min_9);
            z_cur = f(problems[prob_num].extr_points_min.x[8], problems[prob_num].extr_points_min.y[8], prob_num);
            grafar.seq(z_cur - 0.05, z_cur + 0.05, 21).into(z_min_9);
        }
	}

    sel1.container.addEventListener('change', updateProblem);
}());