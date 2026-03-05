---
layout: default
cover: false
---

<header>
  <h1>{{ site.name }}</h1>
</header>

<hr class="stylish"/>

<main class="home-main">
  <section id="posts">
    <h3 class="home-page-heading">Blog</h3>
    <div class="parent">
      {% for post in site.posts %}
      <div class="post-wrapper">
        <time class="post-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
        <a class="post-link" href="{{ post.url }}">
          {{ post.title }}
        </a>
      </div>
      {% endfor %}
    </div>
  </section>
</main>
