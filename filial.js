var Empresa;
(function (Empresa) {
    var Filial = /** @class */ (function () {
        function Filial() {
        }
        Filial.prototype.getCodFilial = function () {
            return this._codFilial;
        };
        Filial.prototype.setCodFilial = function (codigo) {
            this._codFilial = codigo;
        };
        return Filial;
    }());
})(Empresa || (Empresa = {}));
