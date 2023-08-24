import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Posts from "./components/post";
import {useEffect, useState} from "react";

const API_URL = "http://localhost:3000/api/v1/posts";

function getPosts() {
    return axios.get(API_URL).then((response) => response.data)
}

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let mounted = true;
        getPosts().then((posts) => {
            if (mounted) {
                setPosts(posts)
            }
        });
        return () => (mounted = false);
    }, []);
    console.log(posts);
  return (
    <div className="App">
      <h1>Hello World</h1>
       <Posts posts={posts} />
    </div>
  );
}

export default App;
