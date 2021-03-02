module.exports =  (sequelize: any, DataTypes: any) => {
    const Group = sequelize.define('group', {
        
            groupName: DataTypes.STRING,
            avatar: DataTypes.STRING,
         
            
            })         
       return Group;
};