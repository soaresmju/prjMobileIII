var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///<reference path="Pessoa.ts"/>
var Empresa;
(function (Empresa) {
    var Funcionario = /** @class */ (function (_super) {
        __extends(Funcionario, _super);
        function Funcionario() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Funcionario.prototype.getCodFuncionario = function () {
            return this._codFuncionario;
        };
        Funcionario.prototype.setCodFuncionario = function (codigo) {
            this._codFuncionario = codigo;
        };
        Funcionario.prototype.getSetor = function () {
            return this._setor;
        };
        Funcionario.prototype.setSetor = function (setor) {
            this._setor = setor;
        };
        return Funcionario;
    }(Empresa.Pessoa));
    Empresa.Funcionario = Funcionario;
})(Empresa || (Empresa = {}));
