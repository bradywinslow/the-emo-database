import { Sequelize } from 'sequelize';
import { BetterSqlite3 } from 'better-sqlite3'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './storage/data.db',
  dialectModule: BetterSqlite3
});

export default sequelize;
