(function() {
    function norm(a) {
		var aNorm2 = 0,
			l = a.length;
		for (var i = 0; i < l; i++)
			aNorm2 += a[i] * a[i];
		aNorm2 = Math.sqrt(aNorm2);
		return aNorm2;
	}

    function getProblemById(id) {
        return problems.filter(function(pr) {
            return pr.id === id;
        })[0];
    }
				
	var panelMainDiv = document.getElementById('plot3d_main');
	panelMainDiv.addEventListener('mouseover', eulerface.lockScroll);
	panelMainDiv.addEventListener('mouseout', eulerface.unlockScroll);
		
	var xInpDiv = document.getElementById('x_input'),
		yInpDiv = document.getElementById('y_input');
	xInpDiv.addEventListener('change', updateProblem);
	yInpDiv.addEventListener('change', updateProblem);
	
	var x1ptDiv = document.getElementById('x_pt1'),
		y1ptDiv = document.getElementById('y_pt1');
	x1ptDiv.addEventListener('change', updateProblem);
	y1ptDiv.addEventListener('change', updateProblem);

	sel1 = new eulerface.Select(document.getElementById('sel1'));
	for (var k = 1; k <= problems.length; k++) {
		sel1.addOption(document.getElementById('opt-la-' + k), k - 1);
	}

	var pan3d_main = new grafar.Panel(document.getElementById('plot3d_main'));
	pan3d_main.camera.position.set(-8, 8, 8);

	var prob_num = sel1.container.getAttribute('value');
	var p = grafar.set([prob_num]).select();

	var Main_point = [0, 0];
    var Vect_point = [0, 0];

	var xInp = parseFloat(document.getElementById('x_input').value),
		yInp = parseFloat(document.getElementById('y_input').value);
		
	Main_point[0] = xInp;
	Main_point[1] = yInp;
	Main_point[2] = problems[prob_num].eqn_comp(Main_point[0], Main_point[1]);
		
	var x1pt = parseFloat(document.getElementById('x_pt1').value),
		y1pt = parseFloat(document.getElementById('y_pt1').value);

	Vect_point[0] = x1pt;
	Vect_point[1] = y1pt;

	var resul = 0;
	if (norm(Vect_point) != 0) {
		resul = (problems[prob_num].grad_n[0](xInp, yInp)*x1pt + problems[prob_num].grad_n[1](xInp, yInp)*y1pt) / norm(Vect_point);
	} else {
		resul = NaN;
	}
	document.getElementById('res').value=resul.toFixed(3);
	document.getElementById('res').disabled = true;

	var mp_x = grafar.set([Main_point[0]]).select(),
    	mp_y = grafar.set([Main_point[1]]).select(),
    	mp_z = grafar.set([Main_point[2]]).select();

	var vp_x = grafar.set([Vect_point[0]]).select(),
		vp_y = grafar.set([Vect_point[1]]).select();

	var vp_norm = grafar.set([norm(Vect_point)]).select();

	// Main graph
	var x = grafar.range(-9, 9, 180).select();
	var y = grafar.range(-9, 9, 180).select();
	var z = grafar.map([x, y, p], (x, y, p) => problems[p].eqn_comp(x, y));
	grafar.pin({axes: [x, y, z], color: [180.0/255.0, 210.0/255.0, 255.0/255.0]}, pan3d_main);

	// Plane graph
	const t = grafar.range(-5, 5, 50).select();
	var x_plane = grafar.map([mp_x, vp_x, t], (mp_x, vp_x, t) => mp_x + t * vp_x);
	var y_plane = grafar.map([mp_y, vp_y, t], (mp_y, vp_y, t) => mp_y + t * vp_y);
	var z_plane = grafar.range(-5, 5, 50).select();
	grafar.pin({axes: [x_plane, y_plane, z_plane], color: [170.0/255.0, 80.0/255.0, 80.0/255.0]}, pan3d_main);

	var x_func = grafar.map([mp_x, vp_x, t], (mp_x, vp_x, t) => mp_x + t * vp_x);
	var y_func = grafar.map([mp_y, vp_y, t], (mp_y, vp_y, t) => mp_y + t * vp_y);
	var z_func = grafar.map([x_func, y_func, p], (x, y, p) => problems[p].eqn_comp(x, y));
	grafar.pin({axes: [x_func, y_func, z_func], color: [255.0/255.0, 255.0/255.0, 150.0/255.0]}, pan3d_main);

	var mp_x_dot = grafar.seq(Main_point[0]-0.075, Main_point[0]+0.075, 21).select();
	var mp_y_dot = grafar.seq(Main_point[1]-0.075, Main_point[1]+0.075, 21).select();
	var mp_z_dot = grafar.seq(Main_point[2]-0.075, Main_point[2]+0.075, 21).select();
	grafar.pin({axes: [mp_x_dot, mp_y_dot, mp_z_dot], color: [0, 255.0/255.0, 0]}, pan3d_main);

	const t2 = grafar.range(-5, 5, 1000).select();
	var x_vect = grafar.map([mp_x, vp_x, t2], (mp_x, vp_x, t) => mp_x + t * vp_x);
	var y_vect = grafar.map([mp_y, vp_y, t2], (mp_y, vp_y, t) => mp_y + t * vp_y);
	var z_vect = grafar.map([x_vect, y_vect, mp_x, mp_y, mp_z, p], (x, y, mp_x, mp_y, mp_z, p) => mp_z + problems[p].grad_n[0](mp_x, mp_y)*(x-mp_x) + problems[p].grad_n[1](mp_x, mp_y)*(y-mp_y));
	grafar.pin({axes: [x_vect, y_vect, z_vect], color: [0, 255.0/255.0, 0]}, pan3d_main);

	const t3 = grafar.range(0, 1, 10).select();
	var x_vect_2 = grafar.map([mp_x, vp_x, vp_norm, t3], (mp_x, vp_x, vp_norm, t) => mp_x + t * vp_x / vp_norm);
	var y_vect_2 = grafar.map([mp_y, vp_y, vp_norm, t3], (mp_y, vp_y, vp_norm, t) => mp_y + t * vp_y / vp_norm);
	var z_vect_2 = grafar.map([mp_x, mp_y, p], (x, y, p) => problems[p].eqn_comp(x, y));
	grafar.pin({axes: [x_vect_2, y_vect_2, z_vect_2], color: [255.0/255.0, 0, 255.0/255.0]}, pan3d_main);

	var tmp_x = Main_point[0] + Vect_point[0] / norm(Vect_point);
	var tmp_y = Main_point[1] + Vect_point[1] / norm(Vect_point);
	var tmp_z = problems[prob_num].eqn_comp(Main_point[0], Main_point[1]);
	var x_dot = grafar.seq(tmp_x-0.075, tmp_x+0.075, 21).select();
	var y_dot = grafar.seq(tmp_y-0.075, tmp_y+0.075, 21).select();
	var z_dot = grafar.seq(tmp_z-0.075, tmp_z+0.075, 21).select();
	grafar.pin({axes: [x_dot, y_dot, z_dot], color: [255.0/255.0, 0, 0]}, pan3d_main);

	function updateProblem() {
		prob_num = sel1.container.getAttribute('value');
		grafar.set([prob_num]).into(p);

		xInp = parseFloat(document.getElementById('x_input').value),
		yInp = parseFloat(document.getElementById('y_input').value),
		Main_point[0] = xInp;
		Main_point[1] = yInp;
		Main_point[2] = problems[prob_num].eqn_comp(Main_point[0], Main_point[1]);

		x1pt = parseFloat(document.getElementById('x_pt1').value),
		y1pt = parseFloat(document.getElementById('y_pt1').value);
		Vect_point[0] = x1pt;
		Vect_point[1] = y1pt;

		if (norm(Vect_point) != 0) {
			resul = (problems[prob_num].grad_n[0](xInp, yInp)*x1pt + problems[prob_num].grad_n[1](xInp, yInp)*y1pt) / norm(Vect_point);
		} else {
			resul = NaN;
		}
		document.getElementById('res').value=resul.toFixed(3);
	
		grafar.set([Main_point[0]]).into(mp_x);
		grafar.set([Main_point[1]]).into(mp_y);
		grafar.set([Main_point[2]]).into(mp_z);
	
		grafar.set([Vect_point[0]]).into(vp_x);
		grafar.set([Vect_point[1]]).into(vp_y);

		grafar.seq(Main_point[0]-0.075, Main_point[0]+0.075, 21).into(mp_x_dot);
		grafar.seq(Main_point[1]-0.075, Main_point[1]+0.075, 21).into(mp_y_dot);
		grafar.seq(Main_point[2]-0.075, Main_point[2]+0.075, 21).into(mp_z_dot);

		tmp_x = Main_point[0] + Vect_point[0] / norm(Vect_point);
		tmp_y = Main_point[1] + Vect_point[1] / norm(Vect_point);
		tmp_z = problems[prob_num].eqn_comp(Main_point[0], Main_point[1]);
		grafar.seq(tmp_x-0.075, tmp_x+0.075, 21).into(x_dot);
		grafar.seq(tmp_y-0.075, tmp_y+0.075, 21).into(y_dot);
		grafar.seq(tmp_z-0.075, tmp_z+0.075, 21).into(z_dot);
	}

	sel1.container.addEventListener('change', updateProblem);
}());