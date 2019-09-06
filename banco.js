var Empresa;
(function (Empresa) {
    var Banco = /** @class */ (function () {
        function Banco() {
        }
        Banco.prototype.getNome = function () {
            return this._nome;
        };
        Banco.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Banco.prototype.getCodBanco = function () {
            return this._codBanco;
        };
        Banco.prototype.setCodBanco = function (codigo) {
            this._codBanco = codigo;
        };
        return Banco;
    }());
    Empresa.Banco = Banco;
})(Empresa || (Empresa = {}));
