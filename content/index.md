---
data: posts.posts
layout: index.njk
---

![profile-photo.jpg](/assets/profile-photo.png)

# Early Start

I'm a super simple website template you can start using in minutes! Find me on GitHub at [ai-mama/early-start](https://github.com/ai-mama/early-start).

You can change anything on this page.

## Recent Posts

This optional section shows recent notes published using Collected Notes. Read more about using Collected Notes for content management [here](/collected-notes-cms/).

{% for post in posts.posts | limit(5) %}
[{{post.title}}](/blog/{{post.path}})
{% endfor %}
