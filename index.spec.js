import app from "./app";
import request from "supertest";
import DataStore from "./data";

describe("test the app", () => {
  test("posts a tweet", async () => {
    const response = await request(app).post("/tweets").send({
      tweet: "Hello World!",
    });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Tweet #1 is posted!");
  });

  test("returns the tweets", async () => {
    jest.spyOn(DataStore.prototype, "tweets", "get").mockReturnValue([
      {
        id: 1,
        tweet: "Hello NodeJS!",
      },
      {
        id: 2,
        tweet: "Hello Express!",
      },
    ]);

    const response = await request(app).get("/tweets");
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject([
      { id: 1, tweet: "Hello NodeJS!" },
      { id: 2, tweet: "Hello Express!" },
    ]);
  });
});
