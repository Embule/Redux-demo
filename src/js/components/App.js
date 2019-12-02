import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";

const App = () => (
  <div>
    <div id="container" class="flex">
      <h2>Articles</h2>
      <List />
    </div>
    <div id="container">
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div id="container">
      <h2>API Posts</h2>
      <Post />
    </div>
    </div>
);
export default App;

