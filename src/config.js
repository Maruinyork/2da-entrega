export const TIPO_PERSISTENCIA = 'mongodb'

export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb+srv://<usuario>:<password>@cluster0.n9vmygq.mongodb.net/ecommerce?retryWrites=true&w=majority',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true, //Not supported anymore
            serverSelectionTimeoutMS: 5000,
        }
    },
  
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: ''
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
          
        }
    },

    firebase: {
        path: '../ecommerce-***-firebase-adminsdk-sovg4-06e238f5ae.json'
    }
}
