import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// CREATE VENDOR
export const createVendor = async (req, res) => {
  const { name } = req.body;

  const vendor = await prisma.vendor.create({
    data: {
      name,
      campusId: req.user.campusId
    }
  });

  res.json(vendor);
};

// GET VENDORS FOR CAMPUS
export const getCampusVendors = async (req, res) => {
  const vendors = await prisma.vendor.findMany({
    where: {
      campusId: req.user.campusId
    }
  });

  res.json(vendors);
};
