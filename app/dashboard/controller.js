module.exports = {
  index: async (req, res) => {
    try {
      res.render('index')
    } catch (err) {
      console.error(err)
    }
  }
}