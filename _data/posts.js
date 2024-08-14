const axios = require('axios')

module.exports = async () => {
    const result = await axios.get('https://collectednotes.com/blog.json') // Change `blog` to your username
    return {
        posts: result.data.notes
    }
}
