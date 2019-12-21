import { Model, Server } from "miragejs";

function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      'foodCalorie': Model,
    },

    seeds(server) {
      server.create("foodCalorie", { food: 'Broccoli', caloriesPer100g: 35 });
      server.create("foodCalorie", { food: 'Orange', caloriesPer100g: 47 });
      server.create("foodCalorie", { food: 'Sliced Bread', caloriesPer100g: 110 });
    },

    routes() {
      this.namespace = "api";

      this.get("/food-calories");

      this.post("/food-calories",
        (schema, request) => {
          const attrs = JSON.parse(request.requestBody);
          return schema.db.foodCalories.insert(attrs);
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