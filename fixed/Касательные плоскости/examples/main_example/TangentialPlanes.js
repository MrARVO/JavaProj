(function() {
		function f(x, y, i) {
			return problems[i].eqn_comp(x, y);
		}
		
		var panelMainDiv = document.getElementById('plot3d_main');
		panelMainDiv.addEventListener('mouseover', eulerface.lockScroll);
		panelMainDiv.addEventListener('mouseout', eulerface.unlockScroll);
		
		var xInpDiv = document.getElementById('x_input'),
			yInpDiv = document.getElementById('y_input');
		xInpDiv.addEventListener('change', updateTangPoint);
		yInpDiv.addEventListener('change', updateTangPoint);
		
		var x1ptDiv = document.getElementById('x_pt1'),
			y1ptDiv = document.getElementById('y_pt1'),
			x2ptDiv = document.getElementById('x_pt2'),
			y2ptDiv = document.getElementById('y_pt2');
		x1ptDiv.addEventListener('change', updateProblem);
		x2ptDiv.addEventListener('change', updateProblem);
		y1ptDiv.addEventListener('change', updateProblem);
		y2ptDiv.addEventListener('change', updateProblem);
		
		sel1 = new eulerface.Select(document.getElementById('sel1'));

		for (var k = 1; k <= problems.length; k++) {
			sel1.addOption(document.getElementById('opt-la-' + k), k - 1);
		}
		
		var prob_num = sel1.container.getAttribute('value');
		var p = grafar.set([prob_num]).select();

		var pan3d_main = new grafar.Panel(document.getElementById('plot3d_main'));
		pan3d_main.camera.position.set(-8, 8, 8);
		
		var points = {
			point_1: [3.5, 0],
			point_2: [0, 3.5]
		};
		var Main_point = [0, 0];

		Main_point[2] = f(Main_point[0], Main_point[1], prob_num);
		points.point_1[2] = f(points.point_1[0], points.point_1[1], prob_num);
		points.point_2[2] = f(points.point_2[0], points.point_2[1], prob_num);

		var x = grafar.range(-7, 7, 140).select();
		var y = grafar.range(-7, 7, 140).select();
		var z = grafar.map([x, y, p], (x, y, p) => f(x, y, p));
		grafar.pin({axes: [x, y, z], color: [65.0/255.0, 105.0/255.0, 255.0/255.0]}, pan3d_main);

		var mp_x = grafar.set([Main_point[0]]).select(),
			mp_y = grafar.set([Main_point[1]]).select(),
			mp_z = grafar.set([Main_point[2]]).select();

		var p1_x = grafar.set([points.point_1[0]]).select(),
			p1_y = grafar.set([points.point_1[1]]).select(),
			p1_z = grafar.set([points.point_1[2]]).select();

		var p2_x = grafar.set([points.point_2[0]]).select(),
			p2_y = grafar.set([points.point_2[1]]).select(),
			p2_z = grafar.set([points.point_2[2]]).select();

		var x_plane = grafar.range(-5, 5, 100).select();
		var y_plane = grafar.range(-5, 5, 100).select();
		var z_plane = grafar.map([x_plane, y_plane, mp_x, mp_y, mp_z, p1_x, p1_y, p1_z, p2_x, p2_y, p2_z], (x, y, mp_x, mp_y, mp_z, p1_x, p1_y, p1_z, p2_x, p2_y, p2_z) =>
								((x-mp_x)*((p1_y-mp_y)*(p2_z-mp_z)-(p2_y-mp_y)*(p1_z-mp_z)) -
								 (y-mp_y)*((p1_x-mp_x)*(p2_z-mp_z)-(p2_x-mp_x)*(p1_z-mp_z)) -
									mp_z *((p1_x-mp_x)*(p2_y-mp_y)-(p2_x-mp_x)*(p1_y-mp_y))) /
										(-((p1_x-mp_x)*(p2_y-mp_y)-(p2_x-mp_x)*(p1_y-mp_y))));
		grafar.pin({axes: [x_plane, y_plane, z_plane], color: [255.0/255.0, 105.0/255.0, 100.0/255.0]}, pan3d_main);

		var mp_x_dot = grafar.seq(Main_point[0]-0.1, Main_point[0]+0.1, 21).select();
		var mp_y_dot = grafar.seq(Main_point[1]-0.1, Main_point[1]+0.1, 21).select();
		var mp_z_dot = grafar.map([mp_x_dot, mp_y_dot, p], (x, y, p) => f(x, y, p));
		grafar.pin({axes: [mp_x_dot, mp_y_dot, mp_z_dot], color: [0, 255.0/255.0, 0]}, pan3d_main);

		var p1_x_dot = grafar.seq(points.point_1[0]-0.1, points.point_1[0]+0.1, 21).select();
		var p1_y_dot = grafar.seq(points.point_1[1]-0.1, points.point_1[1]+0.1, 21).select();
		var p1_z_dot = grafar.map([p1_x_dot, p1_y_dot, p], (x, y, p) => f(x, y, p));
		grafar.pin({axes: [p1_x_dot, p1_y_dot, p1_z_dot], color: [255.0/255.0, 255.0/255.0, 0]}, pan3d_main);

		var p2_x_dot = grafar.seq(points.point_2[0]-0.1, points.point_2[0]+0.1, 21).select();
		var p2_y_dot = grafar.seq(points.point_2[1]-0.1, points.point_2[1]+0.1, 21).select();
		var p2_z_dot = grafar.map([p2_x_dot, p2_y_dot, p], (x, y, p) => f(x, y, p));
		grafar.pin({axes: [p2_x_dot, p2_y_dot, p2_z_dot], color: [255.0/255.0, 255.0/255.0, 0]}, pan3d_main);

		function updateTangPoint() {
			var xInp = parseFloat(document.getElementById('x_input').value),
				yInp = parseFloat(document.getElementById('y_input').value);

			var dx = xInp - Main_point[0],
				dy = yInp - Main_point[1];

			Main_point[0] = xInp;
			Main_point[1] = yInp;

			points.point_1[0] = points.point_1[0] + dx;
			points.point_1[1] = points.point_1[1] + dy;
			points.point_2[0] = points.point_2[0] + dx;
			points.point_2[1] = points.point_2[1] + dy;

			document.getElementById('x_pt1').value = points.point_1[0].toFixed(1);
			document.getElementById('y_pt1').value = points.point_1[1].toFixed(1);
			document.getElementById('x_pt2').value = points.point_2[0].toFixed(1);
			document.getElementById('y_pt2').value = points.point_2[1].toFixed(1);

			updateProblem();
		}
		
		function updateProblem() {
			prob_num = sel1.container.getAttribute('value');
            grafar.set([prob_num]).into(p);

			var x1pt, x2pt, y1pt, y2pt;
			x1pt = parseFloat(document.getElementById('x_pt1').value);
			y1pt = parseFloat(document.getElementById('y_pt1').value);
			x2pt = parseFloat(document.getElementById('x_pt2').value);
			y2pt = parseFloat(document.getElementById('y_pt2').value);

			points.point_1[0] = x1pt;
			points.point_1[1] = y1pt;
			points.point_2[0] = x2pt;
			points.point_2[1] = y2pt;
			
			Main_point[2] = f(Main_point[0], Main_point[1], prob_num);
			points.point_1[2] = f(points.point_1[0], points.point_1[1], prob_num);
			points.point_2[2] = f(points.point_2[0], points.point_2[1], prob_num);

			grafar.set([Main_point[0]]).into(mp_x);
			grafar.set([Main_point[1]]).into(mp_y);
			grafar.set([Main_point[2]]).into(mp_z);

			grafar.set([points.point_1[0]]).into(p1_x),
			grafar.set([points.point_1[1]]).into(p1_y),
			grafar.set([points.point_1[2]]).into(p1_z);

			grafar.set([points.point_2[0]]).into(p2_x),
			grafar.set([points.point_2[1]]).into(p2_y),
			grafar.set([points.point_2[2]]).into(p2_z);

			grafar.seq(Main_point[0]-0.1, Main_point[0]+0.1, 21).into(mp_x_dot);
			grafar.seq(Main_point[1]-0.1, Main_point[1]+0.1, 21).into(mp_y_dot);

			grafar.seq(points.point_1[0]-0.1, points.point_1[0]+0.1, 21).into(p1_x_dot);
			grafar.seq(points.point_1[1]-0.1, points.point_1[1]+0.1, 21).into(p1_y_dot);

			grafar.seq(points.point_2[0]-0.1, points.point_2[0]+0.1, 21).into(p2_x_dot);
			grafar.seq(points.point_2[1]-0.1, points.point_2[1]+0.1, 21).into(p2_y_dot);
		}
		
        sel1.container.addEventListener('change', updateProblem);
}());