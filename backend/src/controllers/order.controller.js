import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// CREATE ORDER
export const createOrder = async (req, res) => {
  const { vendorId, items } = req.body;

  let total = 0;
  items.forEach(item => {
    total += item.price * item.qty;
  });

  const order = await prisma.order.create({
    data: {
      userId: req.user.userId,
      vendorId,
      campusId: req.user.campusId,
      status: "CREATED",
      total,
      items: {
        create: items
      }
    },
    include: { items: true }
  });

  res.json(order);
};
