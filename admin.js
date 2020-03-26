const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')

const User = require('./Test')

AdminBro.registerAdapter(AdminBroMongoose)
const adminBro = new AdminBro({
  rootPath: '/admin',
  resources: [
    {
      resource: User,
      options: {
        properties: {
      name: { isVisible: { list: true, filter: true, show: true, edit: false } },
      email: { isVisible: { list: true, filter: true, show: true, edit: false } },
      password: { isVisible: { list: false, filter: false, show: false, edit: false } },
      avatar_url: { isVisible: { list: false, filter: false, show: true, edit: false } },
      bio: { isVisible: { list: false, filter: false, show: true, edit: true } },
    }
      }
    }
  ],
  branding: {
  logo: 'https://static.wixstatic.com/media/a976fc_1c0473a3fc554c7fa79c61448c4055af~mv2.jpg/v1/fill/w_1771,h_850,al_c/a976fc_1c0473a3fc554c7fa79c61448c4055af~mv2.jpg',
  companyName: 'Zhiffy',
  softwareBrothers: false   
	},
})

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro)