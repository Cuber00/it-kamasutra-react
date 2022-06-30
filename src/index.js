import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const dialogJSON = [
  { id: 1, name: "Sveta" },
  { id: 2, name: "Vasya" },
  { id: 3, name: "Andrey" },
  { id: 4, name: "Tolya" },
  { id: 5, name: "Tanya" },
  { id: 6, name: "Slava" },
]
const messageJSON = [
  { id: 1, class: "", message: "Hi" },
  { id: 2, class: "received", message: "How are you?" },
  { id: 3, class: "", message: "Lorem" },
  { id: 4, class: "received", message: "i'm fine" },
  { id: 5, class: "", message: "ok" },
]

const postsJSON = [
  { id: 1, post: ["Hi, how are you?"] },
  { id: 2, post: ["It's my first post"] },
  { id: 3, post: ["It's my first post", "lorem ipsum dolor sit amet"] }
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dataJSON={{
      dialogJSON: dialogJSON,
      messageJSON: messageJSON,
      postsJSON: postsJSON
    }} />
  </React.StrictMode>
);