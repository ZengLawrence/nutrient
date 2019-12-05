import { Model, Server } from "miragejs";

const uuid = require('uuid/v4');  //random

function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      'foodCalorie': Model,
    },

    seeds(server) {
      server.create("foodCalorie", { _id: uuid(), food: 'Broccoli', caloriesPer100g: 35 });
      server.create("foodCalorie", { _id: uuid(), food: 'Orange', caloriesPer100g: 47 });
      server.create("foodCalorie", { _id: uuid(), food: 'Sliced Bread', caloriesPer100g: 110 });
    },

    routes() {
      this.namespace = "api";

      this.get("/food-calories");

      this.post("/food-calories",
        (schema, request) => {
          const attrs = JSON.parse(request.requestBody);
          return schema.db.foodCalories.insert({ ...attrs, _id: uuid() });
        });

    },
  })

  return server
}

export const startMockApiServer = () => {
  if (process.env.NODE_ENV === "development") {
    makeServer()
  }
};