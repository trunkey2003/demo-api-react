import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    const func = () => {
      setLoading(true);
      fetch("https://api-demo-knnn.herokuapp.com/api/post")  
      .then(response => response.json())
      .then(data => {
        setName(data[0].name);
        setEmail(data[0].email);
        setPost(data[0].post);
      })
      .finally(() => {setLoading(false);})
    } 
    func();
  }
  , [loading])

  return (
    <div className="App">
      <h1>Name : {name}</h1>
      <h2>Email: {email}</h2>
      <h3>Nội dung bài post: </h3>
      <p>{post}</p>
    </div>
  );
}

export default App;
