import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// REGISTER
export const register = async (req, res) => {
  const { name, email, password, campusId } = req.body;

  const campus = await prisma.campus.findUnique({
    where: { id: campusId }
  });

  if (!campus || !email.endsWith(campus.domain)) {
    return res.status(400).json({ message: "Invalid campus email" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: "USER",
      campusId
    }
  });

  res.json({ message: "User registered successfully" });
};

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    {
      userId: user.id,
      campusId: user.campusId,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ token });
};
