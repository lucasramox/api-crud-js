const { update } = require('../database/connection');
const connection = require('../database/connection');
const { put } = require('../routes');

module.exports = {
    
    async create(request, response){
        const { id, 
                nome, 
                idade, 
                estado_civil, 
                cidade, 
                estado } = request.body;

                await connection('users').insert({
                    id,
                    nome,
                    idade,
                    estado_civil,
                    cidade,
                    estado
                });

            return response.json();
    },

    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('users').count();

        const aux = await connection('users')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');

        response.header('X-Total-Count', count['count(*)']);

        return response.json(aux);
    },


    async update(request, response){
        const {id, nome, idade, estado_civil, cidade, estado} = request.body;

        await connection('users')
        .where('id', id)
        .update({
            id,
            nome,
            idade,
            estado_civil,
            cidade,
            estado });


        return response.status(204).send();
    },  
    
    async delete(request, response){

        const { id } = request.params;

        await connection('users')
        .where('id', id)
        .del();

        return response.status(204).send();
    }

};