import { Server, Model } from "miragejs";

function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      'foodCalorie': Model,
    },

    seeds(server) {
      server.create("foodCalorie", { _id: '1', foodGroup: 'Vegetable', food: 'Broccoli', caloriesPer100g: 35 });
      server.create("foodCalorie", { _id: '2', foodGroup: 'Fruit', food: 'Orange', caloriesPer100g: 47 });
      server.create("foodCalorie", { _id: '3', foodGroup: 'Carbohydrate', food: 'Sliced Bread', caloriesPer100g: 110 });
    },

    routes() {
      this.namespace = "api"

      this.get("/food-calories", schema => {
        return schema.foodCalories.all()
      })
    },
  })

  return server
}

export const startMockApiServer = () => {
  console.log(`${process.env.NODE_ENV}`);
  if (process.env.NODE_ENV === "development") {
    makeServer()
  }
};