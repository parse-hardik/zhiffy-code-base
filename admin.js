const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
const mongoose = require('mongoose');
const Questions = require('./Questions')
const Products = require('./Products')
const bcrypt = require('bcrypt')

const User = require('./Test')
AdminBro.registerAdapter(AdminBroMongoose)
const adminBro = new AdminBro({
  rootPath: '/admin',
  resources: [
    {
      resource: User,
      options: {
      properties: {
        encryptedPassword: {
          isVisible: false,
        },
        password: {
          type: 'string',
          isVisible: {
            list: false, edit: true, filter: false, show: false,
          },
        },
      },
      actions: {
        new: {
          before: async (request) => {
            console.log(request.payload);
            if(request.payload.password) {
              request.payload = {
                ...request.payload,
                encryptedPassword: await bcrypt.hash(request.payload.password, 10),
                password: undefined,
              }
            }
            return request
          },
        }
      }
    }
  },
    { 
      resource: Questions,
      options: {
        listProperties: ['ques_id','ques', 'Product_type' ,'type','typeOfWeightage', 'Weightage'],
        properties:{
          type:{
              availableValues:[
                {value:"1" ,label :"1"},
                {value:"2", label :"2"},
                {value:"3", label :"3"}
              ]
          },
          typeOfWeightage:{
             availableValues:[
                {value:"absolute" ,label :"Absolute"},
                {value:"percent", label :"Percent"} 
                ]
          }
        }
        
      }
    },
    {
      resource :Products,
      options : {
        listProperties : ['product'],
      }
    },
  ], 
  branding: {
  logo: 'https://static.wixstatic.com/media/a976fc_1c0473a3fc554c7fa79c61448c4055af~mv2.jpg/v1/fill/w_1771,h_850,al_c/a976fc_1c0473a3fc554c7fa79c61448c4055af~mv2.jpg',
  companyName: 'Zhiffy',
  softwareBrothers: false   
	},
})

module.exports = adminRouter = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await NewUser.findOne({ email })
    if (user) {
      const matched = await bcrypt.compare(password, user.encryptedPassword)
      if (matched) {
        return user
      }
    }
    return false
  },
  cookiePassword: 'zhiffy123',
})