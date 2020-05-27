import React from 'react'

export default function Post() {
  return (
    <article class="post">
          <header class="post__header">
            <div class="user">
              <a href="#" class="user__thumb">
                <img src="img/profiles/yoda/yoda-profile.jpg" alt="">
              </a>

              <a href="#" class="user__name">Mestre Yoda</a>
            </div>

            <button class="post__context">
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </header>

          <figure class="post__figure">
            <img src="img/profiles/yoda/yoda-1.jpg" alt="">
          </figure>

          <nav class="post__controls">
            <button class="post__control">
              <i class="far fa-heart"></i>
            </button>

            <button class="post__control">
              <i class="far fa-comment"></i>
            </button>

            <button class="post__control">
              <i class="far fa-bookmark"></i>
            </button>
          </nav>

          <div class="post__status">
            <div class="user">
              <a href="#" class="user__thumb">
                <img src="img/profiles/domino/domino-profile.jpg" alt="">
              </a>

              <span>
              curtido por <a href="#">Domino</a> e outras <a href="#">7 pessoas</a>
            </span>
            </div>
          </div>
        </article>
  )
}