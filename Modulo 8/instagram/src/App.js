import React from "react";

function App() {
  return (
    <>
      <header class="topbar">
        <div class="container">
          <a href="#" class="topbar__logo">
            <img src="img/instagram-logo.svg" alt="Instagram logo" />
          </a>

          <button class="topbar__icon">
            <i class="far fa-paper-plane"></i>
          </button>
        </div>
      </header>

      <div class="container">
        <section class="stories">
          <div class="stories__container">
            <a href="#" class="user__thumb">
              <span class="user__thumb__wrapper">
                <img src="img/profiles/yoda/yoda-profile.jpg" alt="" />
              </span>
            </a>

            <a href="#" class="user__thumb user__thumb--hasNew">
              <span class="user__thumb__wrapper">
                <img src="img/profiles/gamora/gamora-profile.jpg" alt="" />
              </span>
            </a>

            <a href="#" class="user__thumb">
              <span class="user__thumb__wrapper">
                <img
                  src="img/profiles/black-panther/black-panther-profile.jpg"
                  alt=""
                />
              </span>
            </a>
          </div>
        </section>
      </div>

      <div class="container">
        <section class="feed">
          <article class="post">
            <header class="post__header">
              <div class="user">
                <a href="#" class="user__thumb">
                  <img src="img/profiles/yoda/yoda-profile.jpg" alt="" />
                </a>

                <a href="#" class="user__name">
                  Mestre Yoda
                </a>
              </div>

              <button class="post__context">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </header>

            <figure class="post__figure">
              <img src="img/profiles/yoda/yoda-1.jpg" alt="" />
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
                  <img src="img/profiles/domino/domino-profile.jpg" alt="" />
                </a>

                <span>
                  curtido por <a href="#">Domino</a> e outras{" "}
                  <a href="#">7 pessoas</a>
                </span>
              </div>
            </div>
          </article>

          <article class="post">
            <header class="post__header">
              <div class="user">
                <a href="#" class="user__thumb">
                  <img src="img/profiles/gamora/gamora-profile.jpg" alt="" />
                </a>

                <a href="#" class="user__name">
                  Gamora Zen
                </a>
              </div>

              <button class="post__context">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </header>

            <figure class="post__figure">
              <img src="img/profiles/gamora/gamora-1.jpg" alt="" />
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
                  <img src="img/profiles/carol/carol-profile.jpg" alt="" />
                </a>

                <span>
                  curtido por <a href="#">Carol Danvers</a> e outras{" "}
                  <a href="#">7 pessoas</a>
                </span>
              </div>
            </div>
          </article>

          <article class="post">
            <header class="post__header">
              <div class="user">
                <a href="#" class="user__thumb">
                  <img
                    src="img/profiles/black-panther/black-panther-profile.jpg"
                    alt=""
                  />
                </a>

                <a href="#" class="user__name">
                  T'Challa
                </a>
              </div>

              <button class="post__context">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </header>

            <figure class="post__figure">
              <img
                src="img/profiles/black-panther/black-panther-1.jpg"
                alt=""
              />
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
                  <img src="img/profiles/bruce/bruce-profile.jpg" alt="" />
                </a>

                <span>
                  curtido por <a href="#">Bruce Wayne</a> e outras{" "}
                  <a href="#">5 pessoas</a>
                </span>
              </div>
            </div>
          </article>

          <article class="post">
            <header class="post__header">
              <div class="user">
                <a href="#" class="user__thumb">
                  <img src="img/profiles/carol/carol-profile.jpg" alt="" />
                </a>

                <a href="#" class="user__name">
                  Carol Danvers
                </a>
              </div>

              <button class="post__context">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </header>

            <figure class="post__figure">
              <img src="img/profiles/carol/carol-1.jpg" alt="" />
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
                  <img src="img/profiles/yoda/yoda-profile.jpg" alt="" />
                </a>

                <span>
                  curtido por <a href="#">Mestre Yoda</a> e outras{" "}
                  <a href="#">7 pessoas</a>
                </span>
              </div>
            </div>
          </article>

          <article class="post">
            <header class="post__header">
              <div class="user">
                <a href="#" class="user__thumb">
                  <img src="img/profiles/domino/domino-profile.jpg" alt="" />
                </a>

                <a href="#" class="user__name">
                  Domino
                </a>
              </div>

              <button class="post__context">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </header>

            <figure class="post__figure">
              <img src="img/profiles/domino/domino-1.jpg" alt="" />
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
                  <img
                    src="img/profiles/black-panther/black-panther-profile.jpg"
                    alt=""
                  />
                </a>

                <span>
                  curtido por <a href="#">T'Challa</a> e outras{" "}
                  <a href="#">3 pessoas</a>
                </span>
              </div>
            </div>
          </article>

          <article class="post">
            <header class="post__header">
              <div class="user">
                <a href="#" class="user__thumb">
                  <img src="img/profiles/bruce/bruce-profile.jpg" alt="" />
                </a>

                <a href="#" class="user__name">
                  Bruce Wayne
                </a>
              </div>

              <button class="post__context">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </header>

            <figure class="post__figure">
              <img src="img/profiles/bruce/bruce-1.jpg" alt="" />
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
                  <img src="img/profiles/gamora/gamora-profile.jpg" alt="" />
                </a>

                <span>
                  curtido por <a href="#">Gamora Zen</a> e outras{" "}
                  <a href="#">2 pessoas</a>
                </span>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

export default App;
