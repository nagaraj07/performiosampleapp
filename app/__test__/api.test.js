const app = require("../getFunction");
const supertest = require("supertest");

describe("Testing performio sample API", () => {
  // Success test case for base route path
	it("tests the base route path and returns the given message", async () => {
		const response = await supertest(app).get('/');
		expect(response.status).toBe(200);
		expect(response.text).toBe('Hello World!');
	});
  // Success test case for get endpoint
  it("tests the get endpoint and returns the metadata of the application", async () => {
		const response = await supertest(app).get('/app/v1');
		expect(response.status).toBe(200);
		expect(response.text).toBe('{"version":"1.0","description":"pre-interview technical test","lastcommitsha":"abc57858585"}');
	});
  // Failure test case for get endpoint
//   it("tests the get endpoint and returns the metadata of the application", async () => {
// 		const response = await supertest(app).get('/app/v1');
// 		expect(response.status).toBe(200);
// 		expect(response.text).toBe('{"version":"2.0","description":"pre-interview technical test","lastcommitsha":"abc57858585"}');
// 	});

});