const Comentario = (sequelize, DataTypes) => {
    return sequelize.define('Comentario', {
        id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
        texto: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
  };
  
  module.exports = Comentario;
  