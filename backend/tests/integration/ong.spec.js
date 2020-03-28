const request = require('supertest');
const connection = require('../../src/database/connection');
const app = require('../../src/app');

describe('ONG', () => {

    const ong1 = {
        name: "APAD",
        email: "contato@asd.br",
        whatsapp: "48999231231",
        city: "Florianopolis",
        uf: "SC"
    };
    const ong2 = {
        name: "ong2",
        email: "contato@ong.br",
        whatsapp: "48999231231",
        city: "Florianopolis",
        uf: "SC"
    };
    const invalid_ong = {
        name: "ong2",
        email: "contatong.br",
        whatsapp: "48999231231",
        city: "Florianopolis",
        uf: "SC"
    };
    

    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const res = await request(app)
            .post('/ongs')
            //.set('Authorization': 'ddae3234')
            .send(ong1);
        expect(res.statusCode).toEqual(200);    
        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);
    });

    it('should not be able to create a new ONG', async () => {
        const res = await request(app)
            .post('/ongs')
            .send(invalid_ong);

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('statusCode');
        expect(res.body.statusCode).toEqual(400);
        expect(res.body.validation).toHaveProperty('keys');
        expect(res.body.validation.keys).toEqual(['email']);
    });

    it('should be able to create and list one ONG', async () => {
        let res = await request(app)
            .get('/ongs');
        expect(res.body).toHaveLength(0);

        await request(app)
            .post('/ongs')
            .send(ong1);
        
        res = await request(app)
            .get('/ongs');
        
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(1);
        expect(res.body[0]).toHaveProperty('id');
        expect(res.body[0]).toHaveProperty('name');
        expect(res.body[0]).toHaveProperty('email');
        expect(res.body[0]).toHaveProperty('whatsapp');
        expect(res.body[0]).toHaveProperty('city');
        expect(res.body[0]).toHaveProperty('uf');
    });

    it('should be able to create and list two ONG', async () => {
        await request(app)
            .post('/ongs')
            .send(ong1);
        await request(app)
            .post('/ongs')
            .send(ong2);

        const res = await request(app)
            .get('/ongs');
        
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(2);
        expect(res.body[0].id).not.toEqual(res.body[1].id);
    });
});