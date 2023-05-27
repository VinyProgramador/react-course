import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import './Home.css'

const Home = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const data = response.data;
      console.log(data)

      setPosts(data);
    }
    catch(error){
      console.log(error+" Erro na chamada..")
    }
  }

  useEffect(() => {
    getPosts();
  }, [])
  return (
    <div className='home'>
      <h1>Ultimos Posts</h1>
      {posts.length === 0? (<p>Carregando..</p>): (
        posts.map((post)=>(
          <div className="posts" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`} className="btn">
              Cadastro
            </Link>
          </div>
        ))
      )}
      
    </div>
  )
}

export default Home