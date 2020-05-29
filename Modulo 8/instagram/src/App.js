import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { setLike } from "./actions";

import Post from "./components/Post";
import Story from "./components/Story";
import Header from "./components/Header";

function App() {
  const { stories, posts } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleLike = id => {
    dispatch(setLike(id));
  };

  return (
    <div>
      <Header />

      <div class="container">
        <section class="stories">
          <div class="stories__container">
            {stories.map(story => (
              <Story story={story} />
            ))}
          </div>
        </section>
      </div>

      <div className="container">
        <section className="feed">
          {posts.map(post => (
            <Post post={post} onClickLike={handleLike} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
