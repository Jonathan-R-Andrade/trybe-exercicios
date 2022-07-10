module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan',
    {
      planId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      coverage: DataTypes.STRING,
      price: DataTypes.DOUBLE,
    },
    {
      tableName: 'Plans',
      timestamps: false,
      underscored: true,
    },
  );

  return Plan;
};
