import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventories, setInventories] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const url = "https://carspot-server.onrender.com/inventory";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInventories(data);
        setLoader(false);
      });
  }, [setInventories]);

  return [inventories, setInventories, loader];
};

export default useInventories;
