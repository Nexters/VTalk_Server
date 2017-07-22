/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_likes', {
    seq: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    liketype: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    typeseq: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    userid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'tb_userinfos',
        key: 'userid'
      }
    },
    regdate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'tb_likes'
  });
};
