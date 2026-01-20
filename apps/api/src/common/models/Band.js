import { DataTypes } from 'sequelize';

const BandModel = {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  bandName: { type: DataTypes.STRING, allowNull: false, unique: true },
  origin: { type: DataTypes.STRING, allowNull: false },
  formation: { type: DataTypes.DATE, allowNull: false },
  website: { type: DataTypes.STRING, allowNull: false },
  facebook: { type: DataTypes.STRING, allowNull: false },
  instagram: { type: DataTypes.STRING, allowNull: false },
  twitter: { type: DataTypes.STRING, allowNull: false },
  wikipedia: { type: DataTypes.STRING, allowNull: false }
};

export default (sequelize) => sequelize.define('band', BandModel);