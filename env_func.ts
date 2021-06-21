// variável: tipo int ou string

interface Usuario {
  _nome:string, _email:string, _tel?:string
}

function enviaremail({_nome,_email,_tel}: Usuario) { 
  console.log('Olá ${_nome}, o seu email é ${_email}, telefone ${_tel}.');
  //
  //
  //
}
  enviaremail({
    _email:"juanoliveira110@gmail.com",
    _nome:"Juan pablo",
  });
  