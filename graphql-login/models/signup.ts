module.exports =  (sequelize: any, DataTypes: any) => {
    const Sign = sequelize.define('signup', {
        
            userName: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            
            })         
       return Sign;
};

// export default signSchema