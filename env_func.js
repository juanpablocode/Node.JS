"use strict";
// variável: tipo int ou string
function enviaremail(_a) {
    var _nome = _a._nome, _email = _a._email, _tel = _a._tel;
    console.log('Olá ${_nome}, o seu email é ${_email}, telefone ${_tel}.');
    //
    //
    //
}
enviaremail({
    _email: "juanoliveira110@gmail.com",
    _nome: "Juan pablo",
});
