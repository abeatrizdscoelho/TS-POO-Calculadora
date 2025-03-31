"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bhaskara = /** @class */ (function () {
    function Bhaskara() {
    }
    Bhaskara.calcularBhaskara = function (numero1, numero2, numero3) {
        var delta = numero2 * numero2 - 4 * numero1 * numero3;
        if (delta < 0) {
            console.log("A Equação não possui raízes reais!");
        }
        var raizDelta = Math.sqrt(delta);
        var x1 = (-numero2 + raizDelta) / (2 * numero1);
        var x2 = (-numero2 - raizDelta) / (2 * numero1);
        return [x1, x2];
    };
    return Bhaskara;
}());
exports.default = Bhaskara;
