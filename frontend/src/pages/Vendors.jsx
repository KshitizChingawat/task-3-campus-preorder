import { useEffect, useState } from "react";
import { API } from "../services/api";

export default function Vendors() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch(API + "/vendors", {
      headers: { Authorization: "Bearer " + localStorage.token }
    })
      .then(r => r.json())
      .then(setVendors);
  }, []);

  return vendors.map(v => <div key={v.id}>{v.name}</div>);
}
