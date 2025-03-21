import userRoutes from "./userRoutes.js";

const implement_routes = (app) => {

  // Global routes
  // app.use("/", globalRoutes);

  // User logged routes
  app.use("/user", userRoutes);
}

export default implement_routes;
