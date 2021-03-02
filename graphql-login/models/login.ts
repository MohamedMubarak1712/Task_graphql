//  const Sign = require ('./signup')

module.exports =  (sequelize: any, DataTypes: any) => {
    const Login = sequelize.define('login', {
        
            email: {
                type: DataTypes.STRING,
                foreignKey: true
            },
           
            password: DataTypes.STRING,
            
            })  
          
           
        const Sign = sequelize.define('signup', {
                
            userName: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            
            })         
            
            Login.belongsTo(Sign, {foreignKey: 'email'})

            return Login;

               };
