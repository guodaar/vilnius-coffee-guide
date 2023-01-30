import { useState, useEffect } from "react";
import styled from "styled-components"

const Component = styled.div`
background-color: seagreen;
`

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <Component>
      <h1>{message}</h1>
    </Component>
  );
}

export default Home