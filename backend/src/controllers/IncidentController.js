const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const {page = 1, limit = 5 } = req.query;

        const [count] = await connection('incidents').count();
        const incidents = await connection('incidents')
            .limit(limit)
            .offset(( page-1 ) * limit)
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        res.header('X-Total-Count', count['count(*)']);

        return res.json(incidents);
    },
    async create(req, res) {
        const { title, description, value } = req.body;
        const ong_id = req.headers.authorization;
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        res.json({ id});
    },
    async delete(req, res) {
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        if (incidents.ong_id !== ong_id) {
            return res.status(401).json({ error: "Operation not permited."});
        }

        await connection('incidents').where('id',id).delete();

        return res.status(204).send();
    }

};