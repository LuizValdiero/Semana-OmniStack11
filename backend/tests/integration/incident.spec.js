
const request = require('supertest');
const connection = require('../../src/database/connection');
const app = require('../../src/app');

//const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Incident', () => {

// problema de database locked
/*
    const ong = {
        name: "myONG",
        email: "contato@ong.br",
        whatsapp: "48900000000",
        city: "Florianopolis",
        uf: "SC"
    };
    
    const incident1 = {
        title: "case1",
        description: "description case1",
        value: 10,
    }
    
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    });

*/
    it('should be able to create a new Incident', async () => {
        /*
        console.log("ok");
        const res_ong = await request(app).post('/ongs').send(ong);

        expect(res_ong.body).toHaveProperty('id');
        console.log(res_ong.body);

        const res = await request(app)
            .post('/incidents')
            .set({"authorization": res_ong.body.id})
            .send(incident1);

        expect(res.statusCode).toEqual(200);

        */
    });

});
