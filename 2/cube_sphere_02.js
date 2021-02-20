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

var p = 2;
var sign = 1;
var f = function f() {
    grafar.vsolve(
        function (v) {
            var x = Math.abs(v[0]);
            var y = Math.abs(v[1]);
            var z = Math.abs(v[2]);
            return Math.pow(x, p) + Math.pow(y, p) + Math.pow(z, p) - 1;
    }, 10000, 3).into(morphing);
    
    p = p + sign * (p / 10) * Math.floor(p / 10 + 1);

    if (p > 25) {
        sign = -1;
    } else if (p <= 2) {
        p = 2;
        sign = 1;
    }

    window.setTimeout(f, 300);
}
f();
