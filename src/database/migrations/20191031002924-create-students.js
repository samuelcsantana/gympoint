module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('students', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            age: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
            },
            height: {
                type: Sequelize.FLOAT,
                allowNull: false,
                unique: true,
            },
            weight: {
                type: Sequelize.FLOAT,
                allowNull: false,
                unique: true,
            },
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('students');
    },
};
