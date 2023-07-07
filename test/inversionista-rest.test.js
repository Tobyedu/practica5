const app = require('../index')
const request = require('supertest')


//TEST DE INVERSIONISTA

describe('GET /', ()=>{
    test('should respond whit a 200 status', async()=>{
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200)
    })
    test('shoul repond whit a array', async()=>{
        const response = await request(app).get('/').send();
        expect(response.body).toBeInstanceOf(Object)
    })
})



describe('POST /', ()=>{
    test('should respond whit a 200 status code', async()=>{
        const response = await request(app).post('/').send();
        expect(response.statusCode).toBe(200)
    })
    test('shoul repond whit a array', async()=>{
        const response = await request(app).post('/').send();
        expect(response.body).toBeInstanceOf(Object)
    })
})

