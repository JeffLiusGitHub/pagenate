import { useState, useCallback } from "react";
import axios from "axios";
const API_URL = "https://nominatim.openstreetmap.org/search?city=";
const Format = "&format=json";

const useFetchCity = (input) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchDataHandler = useCallback(async () => {
    try {
      setData([]);
      const controller = new AbortController();
      setIsLoading(true);
      const res = await axios.get(`${API_URL}${input}${Format}`, {
        signal: controller.signal
      });
      const display_name = res?.data?.map((d) => d.display_name);
      setIsLoading(false);
      setData(display_name);
      controller.abort();
    } catch (err) {
      alert(err);
    }
  }, [input]);
  return { isLoading, data, fetchDataHandler };
};

export default useFetchCity;
