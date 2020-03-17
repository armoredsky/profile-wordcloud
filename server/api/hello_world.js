const html_scrapper = require('../lib/html_scrapper')

const initialize = app => {
  app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' })
  })

  app.post('/api/world', async (req, res) => {
    try {
      console.log(req.body)

      const body = await html_scrapper.logHtml('https://news.ycombinator.com')
      console.log(body)

      res.send(`I received your POST request. This is what you sent me: ${req.body.post}`)
    } catch (error) {
      res.send('shit went down')
    }
  })
}

module.exports = {
  initialize,
}
