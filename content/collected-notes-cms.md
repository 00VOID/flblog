---
layout: page.njk
---

# Use Collected Notes as a Content Management System (CMS)

The free [iOS app Collected Notes](https://collectednotes.com/) can be used to write and publish notes from your phone. To have your notes show up on your website in the list below:

1. Open the file [`_data/posts.js`](_data/posts.js).
2. Change the URL to include your username (instead of `blog`).

When you redeploy this site, any new notes you've published will show up in the list below.

## All Notes

{% for post in posts.posts %}
[{{post.title}}](/blog/{{post.path}})
{% endfor %}
