import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "./components/Post";
import Story from "./components/Story";
import Header from "./components/Header";

import { setLike } from "./actions";

function App() {
  const { posts, stories } = useSelector(state => state);
  const dispatch = useDispatch();
  const handleLike = id => {
    dispatch(setLike(id));
  };

  return (
    <>
      <Header />

      <div className="container">
        <section className="stories">
          <div className="stories__container">
            {stories.map(story => (
              <Story key={story.id} story={story} />
            ))}
          </div>
        </section>
      </div>

      <div className="container">
        <section className="feed">
          {posts.map(post => (
            <Post key={post.id} post={post} onClickLike={handleLike} />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
