(function() {
	function vecMul(a, mul) {
		var l = a.length;
		for (i = 0; i < l; i++)
			a[i] = a[i] * mul;
		return a;
	}

	function norm2(a) {
		var aNorm2 = 0;
		for (var i = 0; i < a.length; i++) {
			aNorm2 += a[i] * a[i];
		}
		return Math.sqrt(aNorm2);
	}
	
	var panelMainDiv = document.getElementById('plot3d_main');
	panelMainDiv.addEventListener('mouseover', eulerface.lockScroll);
	panelMainDiv.addEventListener('mouseout', eulerface.unlockScroll);
	
	var xInpDiv = document.getElementById('x_input'),
		yInpDiv = document.getElementById('y_input');
	xInpDiv.addEventListener('change', updateProblem);
	yInpDiv.addEventListener('change', updateProblem);

	var pan3d_main = new grafar.Panel(document.getElementById('plot3d_main'));
	pan3d_main.camera.position.set(-8, 8, 8);

	sel1 = new eulerface.Select(document.getElementById('sel1'));
	for (var k = 1; k <= problems.length; k++) {
		sel1.addOption(document.getElementById('opt-la-' + k), k - 1);
	}

	var prob_num = sel1.container.getAttribute('value');
	var p = grafar.set([prob_num]).select();
	
	var Main_point = [0, 0];
	var xInp = parseFloat(document.getElementById('x_input').value),
		yInp = parseFloat(document.getElementById('y_input').value);
	
	Main_point[0] = xInp;
	Main_point[1] = yInp;
	Main_point[2] = problems[prob_num].eqn_comp(Main_point[0], Main_point[1]);

	var resul   = 0,
		resul_2 = 0;
	
	resul = problems[prob_num].der[0](Main_point[0], Main_point[1]);
	document.getElementById('res').value=resul.toFixed(3);
	document.getElementById('res').disabled = true;
	resul_2 = problems[prob_num].der[0](Main_point[0], Main_point[1]);
	document.getElementById('res2').value=resul_2.toFixed(3);
	document.getElementById('res2').disabled = true;
	
	var Vect_x = [1, 0, resul];
	var Vect_y = [0, 1, resul];
	Vect_x = vecMul(Vect_x, 1/norm2(Vect_x));
	Vect_y = vecMul(Vect_y, 1/norm2(Vect_y));

	var mp_x = grafar.set([Main_point[0]]).select(),
		mp_y = grafar.set([Main_point[1]]).select(),
		mp_z = grafar.set([Main_point[2]]).select();

	var vx_0 = grafar.set([Vect_x[0]]).select(),
		vx_1 = grafar.set([Vect_x[1]]).select(),
		vx_2 = grafar.set([Vect_x[2]]).select();

	var vy_0 = grafar.set([Vect_y[0]]).select(),
		vy_1 = grafar.set([Vect_y[1]]).select(),
		vy_2 = grafar.set([Vect_y[2]]).select();
	
	// Main graph
	var x = grafar.range(-9, 9, 180).select();
	var y = grafar.range(-9, 9, 180).select();
	var z = grafar.map([x, y, p], (x, y, p) => problems[p].eqn_comp(x, y));
	grafar.pin({axes: [x, y, z], color: [150.0/255.0, 200.0/255.0, 250.0/255.0]}, pan3d_main);
	
	var y_plane_1 = grafar.range(-7, 7, 70).select();
	var z_plane_1 = grafar.range(-7, 7, 70).select();
	var x_plane_1 = grafar.map([y_plane_1, z_plane_1, mp_x], (y, z, mp_x) => mp_x);
	grafar.pin({axes: [x_plane_1, y_plane_1, z_plane_1], color: [220.0/255.0, 125.0/255.0, 140.0/255.0]}, pan3d_main);

	var x_plane_2 = grafar.range(-7, 7, 70).select();
	var z_plane_2 = grafar.range(-7, 7, 70).select();
	var y_plane_2 = grafar.map([x_plane_2, z_plane_2, mp_y], (y, z, mp_y) => mp_y);
	grafar.pin({axes: [x_plane_2, y_plane_2, z_plane_2], color: [220.0/255.0, 230.0/255.0, 180.0/255.0]}, pan3d_main);

	const t = grafar.range(-10, 10, 1000).select();
	var x_func_1 = grafar.map([mp_x, vx_0, t], (mp_x, vx_0, t) => mp_x + t * vx_0);
	var y_func_1 = grafar.map([mp_y, vx_1, t], (mp_y, vx_1, t) => mp_y + t * vx_1);
	var z_func_1 = grafar.map([x_func_1, y_func_1, p], (x, y, p) => problems[p].eqn_comp(x, y));
	grafar.pin({axes: [x_func_1, y_func_1, z_func_1], color: [255.0/255.0, 255.0/255.0, 255.0/255.0]}, pan3d_main);

	var x_func_2 = grafar.map([mp_x, vy_0, t], (mp_x, vy_0, t) => mp_x + t * vy_0);
	var y_func_2 = grafar.map([mp_y, vy_1, t], (mp_y, vy_1, t) => mp_y + t * vy_1);
	var z_func_2 = grafar.map([x_func_2, y_func_2, p], (x, y, p) => problems[p].eqn_comp(x, y));
	grafar.pin({axes: [x_func_2, y_func_2, z_func_2], color: [25.0/255.0, 255.0/255.0, 25.0/255.0]}, pan3d_main);

	var x_line_1 = grafar.map([mp_x, vx_0, t], (mp_x, vx_0, t) => mp_x + t * vx_0);
	var y_line_1 = grafar.map([mp_y, vx_1, t], (mp_y, vx_1, t) => mp_y + t * vx_1);
	var z_line_1 = grafar.map([mp_z, vx_2, t], (mp_z, vx_2, t) => mp_z + t * vx_2);
	grafar.pin({axes: [x_line_1, y_line_1, z_line_1], color: [0, 255.0/255.0, 0]}, pan3d_main);

	var x_line_2 = grafar.map([mp_x, vy_0, t], (mp_x, vy_0, t) => mp_x + t * vy_0);
	var y_line_2 = grafar.map([mp_y, vy_1, t], (mp_y, vy_1, t) => mp_y + t * vy_1);
	var z_line_2 = grafar.map([mp_z, vy_2, t], (mp_z, vy_2, t) => mp_z + t * vy_2);
	grafar.pin({axes: [x_line_2, y_line_2, z_line_2], color: [255.0/255.0, 0, 0]}, pan3d_main);

	hideAllBut = function(container, visible) {
        var children = container.children;
        for (var i = 0; i < children.length; i++)
          children[i].style.display = 'none';
      visible.style.display = 'block';
    }
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

		xInp = parseFloat(document.getElementById('x_input').value),
		yInp = parseFloat(document.getElementById('y_input').value);
		
		Main_point[0] = xInp;
		Main_point[1] = yInp;
		Main_point[2] = problems[prob_num].eqn_comp(Main_point[0], Main_point[1]);

		resul = problems[prob_num].der[0](Main_point[0], Main_point[1]);
		document.getElementById('res').value=resul.toFixed(3);
		resul_2 = problems[prob_num].der[0](Main_point[0], Main_point[1]);
		document.getElementById('res2').value=resul_2.toFixed(3);

		grafar.set([Main_point[0]]).into(mp_x);
		grafar.set([Main_point[1]]).into(mp_y);
		grafar.set([Main_point[2]]).into(mp_z);

		Vect_x = [1, 0, resul];
		Vect_y = [0, 1, resul];
		Vect_x = vecMul(Vect_x, 1/norm2(Vect_x));
		Vect_y = vecMul(Vect_y, 1/norm2(Vect_y));

		grafar.set([Vect_x[0]]).into(vx_0),
		grafar.set([Vect_x[1]]).into(vx_1),
		grafar.set([Vect_x[2]]).into(vx_2);

		grafar.set([Vect_y[0]]).into(vy_0),
		grafar.set([Vect_y[1]]).into(vy_1),
		grafar.set([Vect_y[2]]).into(vy_2);
	}
	
    sel1.container.addEventListener('change', updateProblem);
}());