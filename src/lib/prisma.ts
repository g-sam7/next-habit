import { PrismaClient } from '@prisma/client';

// Declare global variable for PrismaClient
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Create a new PrismaClient if one doesn't exist in global scope
const prisma = global.prisma || new PrismaClient();

// In development mode, save the PrismaClient to the global object to prevent
// multiple instances of PrismaClient from being created due to hot reloading
if (process.env.NODE_ENV === 'development') global.prisma = prisma;

export default prisma;