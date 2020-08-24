import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/amazona',
  JWT_SECRET: process.env.JWT_SECRET || 'thisisasecretkey',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'Ae523ilJnVr_tFOrarppjIf31CuUWoWnxK2rHqhSSArN0MgJ1yFurAdIM-AKptqlCci3M2uGnsWYpKJ5',
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey'
};