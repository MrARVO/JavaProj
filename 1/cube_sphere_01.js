"use strict";

grafar.setup({ particleRadius: .1 });

var morphing = grafar.vsolve(
    function (v) {
        var x = Math.abs(v[0]);
        var y = Math.abs(v[1]);
        var z = Math.abs(v[2]);
        return Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2) - 1;
}, 10000, 3).select();

grafar.pin(morphing, new grafar.Panel(document.getElementById('cube_sphere')));

var slider = document.getElementById('slider');
slider.oninput = function() {
    var p = (this.value - this.min) * 40 / this.max;
    p = 2 + Math.pow(p / 10, 2);
    
    grafar.vsolve(
        function (v) {
            var x = Math.abs(v[0]);
            var y = Math.abs(v[1]);
            var z = Math.abs(v[2]);
            return Math.pow(x, p) + Math.pow(y, p) + Math.pow(z, p) - 1;
    }, 10000, 3).into(morphing);   
}
slider.oninput();
