export const config = {
  dev: {
    username: process.env.uname,
    password: process.env.passwd,
    database: process.env.db,
    host: process.env.host,
    dialect: process.env.postgres,
    aws_region: process.env.region,
    aws_profile: process.env.profile,
    aws_media_bucket: process.env.bucket,
  },
  jwt: {
    secret: process.env.jwt,
  },
  prod: {
    username: '',
    password: '',
    database: 'udagram_prod',
    host: '',
    dialect: 'postgres',
  },
};
