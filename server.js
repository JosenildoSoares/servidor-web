const express = require ('express'); //Importando a biblioteca express
const app = express(); //Adicionando o express na váriavel app

app.get('/', function (req, res){ //Criando uma rota '/'
res.send('Home express') //Retorno 
}); 

//placeholders

app.get('/nome/:name', function (req, res){ //Recebe o parâmetro name
    res.send("Seja bem-vindo " + req.params.name) //exibe o parâmetro name
});

// EXEMPLO DE COMO USAR O PLACE HOLDERS: http://localhost:8080/nome/Junior

//--------------------------------------------------------------------------------------------------

//utilizando o query

app.get('/comidas', function (req, res){ //Criando a rota '/comidas'
 const petisco = req.query.petisco //Atribuindo váriavéis petisco e bebida
 const bebida = req.query.bebida
 res.send(`Meu petisco preferido é ${petisco}, e um copo de ${bebida}`) //Retorno
})

//EXEMPLO DE COMO UTILIZAR O QUERY: http://localhost:8080/comidas?petisco=batata&bebida=suco

app.listen(8080, () => //A porta em qual será iniciado o servidor
console.log('Sevidor iniciado na porta 8080')
);
