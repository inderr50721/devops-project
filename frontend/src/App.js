import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/stats")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={styles.container}>
      
      <h1 style={styles.heading}>
        DevOps Dashboard 🚀
      </h1>

      {data ? (
        <div style={styles.cardContainer}>

          <div style={styles.card}>
            <h2>Services</h2>
            <p>{data.services}</p>
          </div>

          <div style={styles.card}>
            <h2>Containers</h2>
            <p>{data.containers}</p>
          </div>

          <div style={styles.card}>
            <h2>CPU Usage</h2>
            <p>{data.cpu}</p>
          </div>

          <div style={styles.card}>
            <h2>Memory</h2>
            <p>{data.memory}</p>
          </div>

        </div>
      ) : (
        <p style={{textAlign:"center"}}>Loading...</p>
      )}

    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#0f172a",
    color: "white",
    height: "100vh",
    padding: "20px",
    fontFamily: "Arial"
  },
  heading: {
    textAlign: "center"
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "40px"
  },
  card: {
    backgroundColor: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    width: "160px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.5)"
  }
};

export default App;