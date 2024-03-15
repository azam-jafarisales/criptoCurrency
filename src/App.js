import { useEffect, useState } from "react";
import { httpClient } from "./services/http";
// import axios from "axios";

function App() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
 
  useEffect(() => {
   httpClient
      .get("coins/list")
      .then((response) => {
        setPost(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!";

  console.log(post);
  return <div>hello</div>;
}

export default App;
