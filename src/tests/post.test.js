//const request = require('supertest');
const server = require('../server.js');

describe("Posts API", () => {
    it("should create a new post", async () => {
        const postData = { category: "História", 
                           topic: "Revolução francesa",
                           description: "Como se deu a revolução francesa e seus impactos:",
                           userId:"621d3565-f294-4747-824c-a612927c3d9c"
                           };
        const response = await request(server).post('/posts').send(postData);
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual(expect.objectContaining(userData));
    });

    it('should retrieve all posts', async () => {
        const response = await request(server).get('/posts');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.objectContaining(response.body));
    });


});