import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ADD MENU ITEM
export const addMenuItem = async (req, res) => {
  const { name, price, vendorId } = req.body;

  const menu = await prisma.menu.create({
    data: {
      name,
      price,
      vendorId
    }
  });

  res.json(menu);
};

// GET MENU FOR VENDOR
export const getVendorMenu = async (req, res) => {
  const menu = await prisma.menu.findMany({
    where: {
      vendorId: req.params.vendorId,
      isActive: true
    }
  });

  res.json(menu);
};
