import { useEffect, useState } from 'react';
import styles from '../css/board.module.css';

export let data = [];
function Board() {
  const [postings, setPostings] = useState([]);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [content, setCotent] = useState('');

  const clickPost = (event) => {
    const posting = { name: name, title: title, content: content };
    postings.push(posting);
    console.log(postings);
    data = JSON.stringify(postings);
    console.log(data);
  };

  const inputTitle = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  const inputName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const inputContent = (event) => {
    console.log(event.target.value);
    setCotent(event.target.value);
  };

  return (
    <div>
      <h2>Board</h2>

      <input
        className={styles.title}
        placeholder="Title..."
        type="text"
        onChange={inputTitle}
      />
      <input
        className={styles.name}
        placeholder="Name..."
        type="text"
        onChange={inputName}
      />
      <input
        className={styles.content}
        placeholder="Content..."
        type="text"
        onChange={inputContent}
      />

      <button onClick={clickPost}>Post</button>
    </div>
  );
}

export default Board;
