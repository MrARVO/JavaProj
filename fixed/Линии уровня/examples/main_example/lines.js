(function() {
	var panelMainDiv = document.getElementById('plot3d');
        panelMainDiv.addEventListener('mouseover', eulerface.lockScroll);
        panelMainDiv.addEventListener('mouseout', eulerface.unlockScroll);

	var panelCondDiv = document.getElementById('plot2d');
        panelCondDiv.addEventListener('mouseover', eulerface.lockScroll);
        panelCondDiv.addEventListener('mouseout', eulerface.lockScroll);
   
    var pan3d = new grafar.Panel(document.getElementById('plot3d')),
	    pan2d = new grafar.Panel(document.getElementById('plot2d'));

    pan2d.setAxes(['x', 'y']);

	pan3d.camera.position.set(-15, 5, 5);
	pan2d.camera.position.set(0, -10, 0);
	
    var sel1 = new eulerface.Select(document.getElementById('sel1'));
    var slider = document.getElementById('c_param');

	for (var k = 1; k <= problems.length; k++) {
        if (k != 8) {
            sel1.addOption(document.getElementById('opt-la-' + k), k - 1);
        }
	}

    var prob_num = sel1.container.getAttribute('value');
    var p = grafar.set([prob_num]).select();

    var x = grafar.range(-10, 10, 200).select();
    var y = grafar.range(-10, 10, 200).select();
    var z = grafar.map([x, y, p], (x, y, p) => problems[p].eqn_comp(x, y));
    grafar.pin({axes: [x, y, z], color: [90.0/255.0, 6.0/255.0, 239.0/255.0]}, pan3d);

    const l = grafar.set([0]).select();
    var x_plate = grafar.range(-7, 7, 20).select();
    var y_plate = grafar.range(-7, 7, 20).select();
    var z_plate = grafar.map([x_plate, y_plate, l], (x, y, l) => l);
    grafar.pin({axes: [x_plate, y_plate, z_plate], color: [0, 225.0/255.0, 225.0/255.0]}, pan3d);

    var xy = grafar.vsolve((v) => problems[prob_num].eqn_comp(v[0], v[1]), 25000, 2).select();
    grafar.pin(xy, pan2d);

    function updateProblem() {
        prob_num = sel1.container.getAttribute('value');
        grafar.set([prob_num]).into(p);

        var level = document.getElementById("c_param").value;
        grafar.vsolve((v) => problems[prob_num].eqn_comp(v[0], v[1]) - level, 25000, 2).into(xy);
	}

    slider.addEventListener('input', function() {
        grafar.set([this.value]).into(l);
        grafar.vsolve((v) => problems[prob_num].eqn_comp(v[0], v[1]) - this.value, 25000, 2).into(xy);
    });

    sel1.container.addEventListener('change', updateProblem);
}());
