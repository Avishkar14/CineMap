import {useState, useEffect} from "react";
function App() {
    const [message , setMessage] = useState("Connecting to backend...");
    useEffect(() => {
        fetch("http://localhost:8080/api/health")
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.status);
            })
            .catch((error) => {
                console.error(error);
                setMessage("Backend not reachable");
            });
    }, []);
  return (
    <div>
      <h1>CineMap</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;