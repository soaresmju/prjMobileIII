///<reference path="Pessoa.ts"/>
///<reference path="Cliente.ts"/>
///<reference path="Funcionario.ts"/>
var Empresa;
(function (Empresa) {
    //Instanciando Classe;
    var cliente = new Empresa.Cliente();
    cliente.setNome("João");
    cliente.setCodCliente(1);
    cliente.setCPF("498.270.898-38");
    cliente.setIdade(19);
    cliente.setCredito(2000);
    document.getElementById('codigo').textContent = cliente.getCodCliente().toString();
    document.getElementById('nome').textContent = cliente.getNome();
    document.getElementById('idade').textContent = cliente.getIdade().toString();
    document.getElementById('cpf').textContent = cliente.getCPF();
    document.getElementById('credito').textContent = cliente.getCredito().toString();
})(Empresa || (Empresa = {}));
