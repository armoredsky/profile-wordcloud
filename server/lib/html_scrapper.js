const fetch = require('node-fetch')

const logHtml = async (url) => {
  try {
    const res = await   fetch(url)
    const body = await res.text()
    return body

  } catch(error) {
        console.log("something went wrong scrapping url", url, error)
  }
}


module.exports = {
  logHtml
}
