import { SET_LIKE } from "./actionsTypes";

const stories = [
  {
    id: 1,
    user_thumb: "img/profiles/yoda/yoda-profile.jpg",
    user_name: "Yoda"
  },
  {
    id: 2,
    user_thumb: "img/profiles/gamora/gamora-profile.jpg",
    user_name: "Gamora"
  },
  {
    id: 3,
    user_thumb: "img/profiles/black-panther/black-panther-profile.jpg",
    user_name: "Black Panther"
  }
];
const posts = [
  {
    id: 1,
    user_name: "Mestre Yoda 2",
    user_thumb: "img/profiles/yoda/yoda-profile.jpg",
    post_figure: "img/profiles/yoda/yoda-1.jpg",
    likes_number: 7,
    show_like: {
      user_name: "Domino",
      user_thumb: "img/profiles/domino/domino-profile.jpg"
    },
    liked: true
  },
  {
    id: 2,
    user_name: "Gamora Zen",
    user_thumb: "img/profiles/gamora/gamora-profile.jpg",
    post_figure: "img/profiles/gamora/gamora-1.jpg",
    likes_number: 7,
    show_like: {
      user_name: "Carol Danvers",
      user_thumb: "img/profiles/carol/carol-profile.jpg"
    }
  },
  {
    id: 3,
    user_name: "T'Challa",
    user_thumb: "img/profiles/black-panther/black-panther-profile.jpg",
    post_figure: "img/profiles/black-panther/black-panther-1.jpg",
    likes_number: 5,
    show_like: {
      user_name: "Bruce Wayne",
      user_thumb: "img/profiles/bruce/bruce-profile.jpg"
    }
  },
  {
    id: 4,
    user_name: "Carol Danvers",
    user_thumb: "img/profiles/carol/carol-profile.jpg",
    post_figure: "img/profiles/carol/carol-1.jpg",
    likes_number: 7,
    show_like: {
      user_name: "Mestre Yoda",
      user_thumb: "img/profiles/yoda/yoda-profile.jpg"
    }
  },
  {
    id: 5,
    user_name: "Domino",
    user_thumb: "img/profiles/domino/domino-profile.jpg",
    post_figure: "img/profiles/domino/domino-1.jpg",
    likes_number: 3,
    show_like: {
      user_name: "T'Challa",
      user_thumb: "img/profiles/black-panther/black-panther-profile.jpg"
    }
  },
  {
    id: 6,
    user_name: "Bruce Wayne",
    user_thumb: "img/profiles/bruce/bruce-profile.jpg",
    post_figure: "img/profiles/bruce/bruce-1.jpg",
    likes_number: 2,
    show_like: {
      user_name: "Gamora Zen",
      user_thumb: "img/profiles/gamora/gamora-profile.jpg"
    }
  }
];

const initialState = {
  stories,
  posts: JSON.parse(window.localStorage.getItem("posts")) || posts
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LIKE: {
      const newPosts = state.posts.map(post => {
        if (post.id === payload) {
          return {
            ...post,
            liked: !post.liked
          };
        }

        return post;
      });
      window.localStorage.setItem("posts", JSON.stringify(newPosts));
      return {
        ...state,
        posts: newPosts
      };
    }

    default:
      return state;
  }
};
