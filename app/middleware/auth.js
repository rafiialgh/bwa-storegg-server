const Player = require('../player/model')
const config = require('../../config')
const jwt = require('jsonwebtoken')

module.exports = {
  isLoginAdmin: (req, res, next) => {
    if (req.session.user === null || req.session.user === undefined) {
      req.flash('alertMessage', `Mohon maaf session anda telah habis silahkan login kembali`)
      req.flash('alertStatus', 'danger')
      res.redirect('/')
    } else {
      next()
    }
  },
  isLoginPlayer: async (req, res, next) => {
    try {
      const token = req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : null
      const data = jwt.verify(token, config.jwtKey)
      console.log(data)
      const player = await Player.findOne({ _id: data.player.id })
      if (!player) {
        return res.status(404).json({ message: 'User not found' })
      }
      req.player = player
      req.token = token
      next()
    } catch (err) {
      return res.status(401).json({
        error:  'Not authorized to access this resource'
      })
    }
  }
}
