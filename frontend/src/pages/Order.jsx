import { post } from "../services/api";

export default function Order() {
  const placeOrder = async () => {
    await post("/orders", {
      vendorId: "VENDOR_ID",
      items: [
        { menuId: "1", name: "Burger", price: 50, qty: 2 }
      ]
    });
  };

  return <button onClick={placeOrder}>Place Order</button>;
}
