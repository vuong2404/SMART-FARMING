let express = require('express')
let router = express.Router()
let Record = require('../controllers/records.controller')
router.route("/records").get(Record.getOne())
router.route("/allrecs").get(Record.getAll())
exports.recordRouter = router