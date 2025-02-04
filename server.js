// Server configuration tools importation
import express from "express";
import session from "express-session";
import morgan from "morgan";
import helmet from "helmet";
import "dotenv/config";

// Database and front-end tools importation
import sequelize from "./model/modelConfig.js";
import cors from "cors";

// Creating the app
const app = express();
const PORT = process.env.PORT || 5000

// Improting routes
import routes from "./routes/routes.js"

// Configuring and using middlewares
app.use(cors({ origin: "http://localhost:3000" }))
app.use(helmet());
app.use(express.json());
app.use(express.static('/public'));
app.use(morgan(":date[web] - :method - :status - :url"));

app.use(session({
  secret: "definindo-segredo",
  resave: false,
  // httpOnly: true, // Prevent access to the cookie from the client-side
  saveUninitialized: true,
  cookie: {secure: false}
}))

// Configuring the routers
routes(app);

// Configuring the database 
sequelize.authenticate().then(() => {
  console.log("Database connection maded with no problems");
}).catch((error) => {
  console.log(`Database with error in the connection: ${error}`);
});

// Launching Application
app.listen(PORT, () => {
  console.log(`Launching the server in the port ${PORT}...`);
});
