import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Stubbed database connection for future MySQL integration
// This will be implemented when database is ready

export const createConnection = async () => {
  // TODO: Implement actual MySQL connection
  // const connection = await mysql.createConnection({
  //   host: process.env.DB_HOST || 'localhost',
  //   port: parseInt(process.env.DB_PORT || '3306'),
  //   user: process.env.DB_USER || 'root',
  //   password: process.env.DB_PASSWORD || '',
  //   database: process.env.DB_NAME || 'fitfam'
  // });
  // return connection;

  console.warn('⚠️ Database connection not implemented yet');
  return null;
};

export const createPool = () => {
  // TODO: Implement connection pool for better performance
  // const pool = mysql.createPool({
  //   host: process.env.DB_HOST || 'localhost',
  //   port: parseInt(process.env.DB_PORT || '3306'),
  //   user: process.env.DB_USER || 'root',
  //   password: process.env.DB_PASSWORD || '',
  //   database: process.env.DB_NAME || 'fitfam',
  //   waitForConnections: true,
  //   connectionLimit: 10,
  //   queueLimit: 0
  // });
  // return pool;

  console.warn('⚠️ Database pool not implemented yet');
  return null;
};

// In-memory storage for development (temporary)
export const mockDB = {
  users: new Map(),
  workouts: new Map(),
  famGroups: new Map()
};
