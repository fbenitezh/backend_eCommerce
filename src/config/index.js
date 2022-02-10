import dotenv from "dotenv";
dotenv.config();

export const config = {
  appName: "Backend-eCommerce",
  db: {
    mariadb: {
      client: "mysql",
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      },
    },
    mongodb: {
      uri: process.env.MONGODB_URI,
      config: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
    file:{
      basePath:"./src/storage/"
    }
  },
  admin:{
    email:'francobenitez980@gmail.com'
  }
};
