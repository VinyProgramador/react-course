import React from 'react'
import './NewPost.css'
const NewPost = () => {
  return (
    <div className='newPost'>
      <h2>Inserir Novo Post:</h2>
      <form>
        <div className='formControl'>
          <label htmlFor="title">Título</label>
          <input type="text" name='title' id='title' placeholder='Dígite um titulo'/>
        </div>
        <div className='formControl'>
          <label htmlFor="body">Título</label>
          <textarea name='body' id='body' placeholder='Dígite o conteudo'>
          </textarea>
        </div>
          <input type="submit" value="Criar Post" className='btn'/>
      </form>
    </div>
  )
}

export default NewPost