module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        name: DataTypes.STRING,
        done: DataTypes.BOOLEAN
    })
    
    return Task
}