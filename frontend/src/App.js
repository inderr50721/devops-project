import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://devops-project-ow0w.onrender.com/stats")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={styles.container}>

      <div style={styles.navbar}>
        <h2>DevOps Dashboard</h2>
      </div>

      <h1 style={styles.heading}>System Overview 🚀</h1>

      {data ? (
        <div style={styles.grid}>

          <div style={styles.card}>
            <h3>Services</h3>
            <p>{data.services}</p>
          </div>

          <div style={styles.card}>
            <h3>Containers</h3>
            <p>{data.containers}</p>
          </div>

          <div style={styles.card}>
            <h3>CPU Usage</h3>
            <p>{data.cpu}</p>
          </div>

          <div style={styles.card}>
            <h3>Memory Usage</h3>
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
    minHeight: "100vh",
    fontFamily: "Arial"
  },
  navbar: {
    background: "#1e293b",
    padding: "15px",
    textAlign: "center",
    fontSize: "20px"
  },
  heading: {
    textAlign: "center",
    marginTop: "20px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    padding: "40px"
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
    transition: "0.3s"
  }
};

export default App;