// prisma.service.js
import prisma from './prismadb';
const { User } = require('../models/user.model');

async function getUserById(id) {
  const user = await prisma.user.findUnique({ where: { id } });
  return user;
}

async function getAllUsers() {
  const users = await prisma.user.findMany();
  return users;
}

module.exports = {
  getUserById,
  getAllUsers,
};