// Server configuration tools importation
import express from "express";

// Importing the documetation library
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';
import session from "express-session";
import morgan from "morgan";
import helmet from "helmet";
import "dotenv/config";

// Database and front-end tools importation
import sequelize from "./model/modelConfig.js";
import cors from "cors";
import implement_routes from "./routes/routes.js";

// Creating the app
const app = express();
const PORT = process.env.PORT || 5000

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.js'],
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));


// Configuring and using standard middlewares
app.use(cors({ origin: "http://localhost:3000" }))
app.use(helmet());
app.use(express.json());
app.use(express.static('/public'));
app.use(morgan(":date[web] - :method - :status - :url"));

app.use(
  session({
    secret: "definindo-segredo",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);

// Configuring the routers
implement_routes(app);

// Configuring the database 
sequelize.authenticate().then(() => {
  console.log("Database connection maded with no problems");
}).catch((error) => {
  console.log(`Database with error in the connection: ${error}`);
});

// Launching Application
app.listen(PORT, () => {
  console.log(`Launching the server in the port http://localhost:${PORT}...`);
});
