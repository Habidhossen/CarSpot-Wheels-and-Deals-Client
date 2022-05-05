import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    const url = "https://radiant-waters-02359.herokuapp.com/inventory";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  return [inventories, setInventories];
};

export default useInventories;
