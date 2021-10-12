// const request = require("supertest");
// const app = require("../server");
const supertest = require("supertest");

test("GET /api/v1", async () => {
  const post = await Post.create({ version: "1.0", description: "pre-interview technical test", lastcommitsha: "abc57858585" });

  await supertest(app).get("/api/v1")
    .expect(200)
    .then((response) => {
      // Check type and length
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(1);

      // Check data
      expect(response.body[0].version).toBe(post.version);
      expect(response.body[0].description).toBe(post.description);
      expect(response.body[0].lastcommitsha).toBe(post.lastcommitsha);
    });
});