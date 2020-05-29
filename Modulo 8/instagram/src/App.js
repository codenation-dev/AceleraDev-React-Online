import React from "react";

import Post from "./components/Post";
import Story from "./components/Story";
import Header from "./components/Header";

import yoda from "./images/yoda/yoda-profile.jpg";
import yoda1 from "./images/yoda/yoda-1.jpg";
import domino from "./images/domino/domino-profile.jpg";

import gamora from "./images/gamora/gamora-profile.jpg";
import gamora1 from "./images/gamora/gamora-1.jpg";
import carol from "./images/carol/carol-profile.jpg";

import blackpanther from "./images/black-panther/black-panther-profile.jpg";
import blackpanther1 from "./images/black-panther/black-panther-1.jpg";
import bruce from "./images/bruce/bruce-profile.jpg";

import carol1 from "./images/carol/carol-1.jpg";
import domino1 from "./images/domino/domino-1.jpg";
import bruce1 from "./images/bruce/bruce-1.jpg";

function App() {
  const [stories] = React.useState([
    {
      id: 1,
      user_thumb: yoda,
      user_name: "Mestre Yoda"
    },
    {
      id: 2,
      user_thumb: gamora,
      user_name: "Gamora"
    },
    {
      id: 3,
      user_thumb: blackpanther,
      user_name: "Black Panther"
    }
  ]);

  const [posts, setPosts] = React.useState([
    {
      id: 1,
      user_name: "Mestre Yoda",
      user_thumb: yoda,
      post_figure: yoda1,
      likes_number: 7,
      show_like: {
        user_name: "Domino",
        user_thumb: domino
      },
      liked: true
    },
    {
      id: 2,
      user_name: "Gamora Zen",
      user_thumb: gamora,
      post_figure: gamora1,
      likes_number: 7,
      show_like: {
        user_name: "Carol Danvers",
        user_thumb: carol
      }
    },
    {
      id: 3,
      user_name: "T'Challa",
      user_thumb: blackpanther,
      post_figure: blackpanther1,
      likes_number: 5,
      show_like: {
        user_name: "Bruce Wayne",
        user_thumb: bruce
      }
    },
    {
      id: 4,
      user_name: "Carol Danvers",
      user_thumb: carol,
      post_figure: carol1,
      likes_number: 7,
      show_like: {
        user_name: "Mestre Yoda",
        user_thumb: yoda
      }
    },
    {
      id: 5,
      user_name: "Domino",
      user_thumb: domino,
      post_figure: domino1,
      likes_number: 3,
      show_like: {
        user_name: "T'Challa",
        user_thumb: blackpanther
      }
    },
    {
      id: 6,
      user_name: "Bruce Wayne",
      user_thumb: bruce,
      post_figure: bruce1,
      likes_number: 2,
      show_like: {
        user_name: "Gamora Zen",
        user_thumb: gamora
      }
    }
  ]);

  const handleLike = id => {
    setPosts(
      posts.map(post => {
        if (post.id === id) {
          return { ...post, liked: !post.liked };
        }
        return post;
      })
    );
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
