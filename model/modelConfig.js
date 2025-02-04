
import { Sequelize } from "sequelize";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storagePath = path.resolve(__dirname, '../vtask-dev.sqlite3');

const sequelize = new Sequelize({
   dialect: 'sqlite',
  storage: storagePath
});

sequelize.sync();

export default sequelize;
