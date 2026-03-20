// import express from "express";
// import cors from "cors";

// // import authRoutes from "./routes/auth.routes.js";
// import vendorRoutes from "./routes/vendor.routes.js";
// import menuRoutes from "./routes/menu.routes.js";
// import orderRoutes from "./routes/order.routes.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// // app.use("/api/auth", authRoutes);
// app.use("/api/vendors", vendorRoutes);
// app.use("/api/menus", menuRoutes);
// app.use("/api/orders", orderRoutes);

// export default app;
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Veg Burger", price: 80, category: "snacks", veg: true },
    { id: 2, name: "Pizza", price: 120, category: "meal", veg: true },
    { id: 3, name: "Chicken Roll", price: 150, category: "meal", veg: false }
  ]);
});

export default app;
