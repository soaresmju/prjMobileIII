namespace Empresa{
    class Filial{
        private _codFilial:number;
        private _banco:Banco;

        public getCodFilial(){
            return this._codFilial;
        }

        public setCodFilial(codigo: number){
            this._codFilial = codigo;
        }
    }
}