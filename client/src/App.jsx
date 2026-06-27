import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/hello_world")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMessage("Failed to load data from backend.");
      });
  }, []);

  return <div className="bg-black text-white">{message}</div>;
}

export default App;
