import db from "./models";
const Sign = db.sign;
const log = db.log;
const group = db.group;
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';


const resolvers = {
    Query: {
        // async signupData (root: any,{userName,email,password}:any,context: any) {
        //       const data = {userName, email, password}
        //     console.log(email)
        //     return  {message: "success", success: true}     
        //   }, 

        async checkLogin(root: any,{email,password}:any,context: any) {
          // const msg = message
          console.log("email", email)
               const checkData = await Sign
                .findOne({where: {email:email, password: password}})
              console.log("emailSIgnuppp===>", checkData)
                if(checkData !== null && email !== '' && password !== '' ) {
          return {message: "success", success: true}
                } else {
                  return {message: "email and password is wrong", success: false}  
                }
              
        }, 

        
        async getGroupList(root: any,{groupName}: any, context: any) {
             const data = await group
             .findOne({where: {groupName:groupName}})
             return data
        }  

    },

    Mutation: {
       async createUser (root: any, { userName, email, password }: any) {
        
             const data = {userName,email,password}

             const signData = {
              userName,
              email,
              password 
            };
               
             const existingData =  await Sign
             .findOne({where: {email:email, password: password, userName:userName}})

             if(existingData || email === '' || password === '') {
                return {message: "failed", success: false}
              } else if(existingData === null){
                      Sign.create(signData)
                      return {message: "success", success: true}                                                                                            
              }

            }, 


        // async loginData ( root: any, {email, password}: any) {

        //     let data = {email, password}
        //   // console.log("messageee===>",message)
        //     console.log('emailllll', typeof(email))
           
        //     console.log("email==>", email)

        //      const checkData = await Sign
        //         .findOne({where: {email:email, password: password}})
        //       console.log("emailSIgnuppp===>", checkData)
        //         if(email || password === checkData.email || checkData.password) {
        //             log.create(data)
        //      console.log("datalog====>", data)
        //              return {message: "Success", "success": true}
        //         } else {
        //              return {"message": "wrong"}
        //         }
              
          
        // },

        async createGroup ( root: any, {groupName, avatar}: any) {
          let data = {groupName, avatar}
           if(groupName !== " " ) {
          group.create(data)
          // console.log("grpData====>", data)

          return data
        }
        }
          
        }
      
      
      
      }
   

        export default resolvers