import { useState, useEffect } from "react";

function useFetch(url) {
  const token = sessionStorage.getItem("token");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    const response = await fetch(url, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    console.log(json);
    json.avg = 0;
    json.modules.map(({ reviews }) => {
      json.avg = json.avg + (reviews.interaction + reviews.knowledge) / 2;
    });
    json.avg = json.avg / json.modules.length;
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
export { useFetch };
