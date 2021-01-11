const Pedidos = require("../models/Pedidos")

module.exports = {
    //cria a função que vai ser executada pela rota
     async listarPedido(req, res) {

        try {
            const pedidos = await Pedidos.findAll();
            res.send(pedidos);
        } catch (error) {
           console.log(error);
           res.status(500).send({error}) 
        }

        const pedidos = await Pedidos.findAll();
        res.send(pedidos);
    },
      async adicionarPedido  (req, res) {
         //receber os dados do body
        
         
            
            pedido =  await Pedidos.create({cliente, produto, quantidade});

            //retornar resposta de sucesso 
            res.status(201).send({pedido });
        
    },
    
      async deletarPedido (req, res) {
        //recuperar o id do aluno 
        const pedidoId = req.params.id
    
        try {
            let pedido = await Pedidos.findByPk(pedidoId);

            if(!pedido)
                return res.status(404).send({erro:"aluno não encontrado"})

             await pedido.destroy();

            
            //devolver resposta de sucesso
            res.status(204).send();
        } catch (error) {
            console.log(error);
            res.status(500).send({error})
        }
        
        
        
    },
    
      async atualizarPedido (req, res) {
        //recupar o id do aluno 
        const pedidoId = req.params.id;
    
        //receber os dados do aluno
        const { cliente, produto} =  req.body;
    
        try {
            let pedido = await Pedidos.findByPk(pedidoId);

            if(!pedido)
                res.status(404).send({erro : "aluno não encontrado"});

                pedido.cliente = cliente;
                pedido.produto = produto;

                pedido.save();
                 //devolver a resposta de suceso
                res.status(200).send("alterado");

        } catch (error) {
            console.log(error);
            res.status(500).send({error})
        }
       
    
       
    },
    
      async buscarPedido (req, res) {
          const pedidoId = req.params.id
          
          try {
            let pedido = await Pedidos.findByPk(pedidoId, {attributes:["cliente", "produto","quantidade"]})
            if(!pedido)
                return res.status(404).send({erro:"Aluno não encontrado"});
        
        
            
            res.send(pedido);
            
        } catch (error) {
            console.log(error);
            res.status(500).send({error})
        }
        //se aluno não encontrado, retornar not found
    
    
    }

}