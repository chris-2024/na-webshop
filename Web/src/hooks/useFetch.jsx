import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (path) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!path) {
          // Do nothing if path is null
          return;
        }

        const response = await axios.get(path, {
          baseURL: import.meta.env.VITE_API_URL,
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_READ_TOKEN}`,
          },
        });
        setData(response.data.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [path]);

  return { data };
};

export default useFetch;
