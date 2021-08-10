const router = require('express').Router()
const User = require('../models/User')
const Project = require('../models/Project')

router.post('/reset', async (req, res) => {
  await User.deleteMany({})
  await Project.deleteMany({})

  res.status(204).end()
})

module.exports = router