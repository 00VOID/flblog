---
data: posts.posts
layout: page.njk
title: All posts
---

# All Posts

{% for post in posts.posts %}
### [{{ post.title }}](/blog/{{post.path}})

{{ post.headline | strip }}
[Read more &rarr;](/blog/{{ post.path }})
{% endfor %}
