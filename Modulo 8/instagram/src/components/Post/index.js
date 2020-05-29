import React from "react";

export default function Post({ post = {}, onClickLike }) {
  const {
    id,
    name,
    user_thumb,
    user_name,
    post_figure,
    likes_number,
    show_like,
    liked
  } = post;
  return (
    <article className="post">
      <header className="post__header">
        <div className="user">
          <a href={`/${name}`} className="user__thumb">
            <img src={user_thumb} alt={name} />
          </a>

          <a href={`/${name}`} className="user__name">
            {user_name}
          </a>
        </div>

        <button className="post__context">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </header>

      <figure className="post__figure">
        <img src={post_figure} alt="post figure" />
      </figure>

      <nav className="post__controls">
        <button className="post__control" onClick={() => onClickLike(id)}>
          <i className={`${liked ? "fas" : "far"} fa-heart`}></i>
        </button>

        <button className="post__control">
          <i className="far fa-comment"></i>
        </button>

        <button className="post__control">
          <i className="far fa-bookmark"></i>
        </button>
      </nav>

      <div className="post__status">
        {show_like && (
          <div className="user">
            <a href={`/${name}`} className="user__thumb">
              <img src={show_like.user_thumb} alt={show_like.user_name} />
            </a>
            <span>
              curtido por <a href={`/${name}`}>{show_like.user_name}</a> e
              outras <a href={`/${name}`}>{likes_number} pessoas</a>
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
