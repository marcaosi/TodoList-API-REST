const express = require('express')
const { Task } = require('../models')

const router = express.Router()


router.get('/', async (req, res) => {
    const tasks = await Task.findAll()
    res.json(tasks)
})

router.post('/', async (req, res) => {
    const task = await Task.create(req.body)
    res.json(task)
})

router.get('/:id', async (req, res) => {
    const tasks = await Task.findOne({
        where: {
            id: req.params.id
        }
    })

    res.json(tasks)
})

router.put('/:id', async (req, res) => {
    const task = await Task.findOne({
        where: {
            id: req.params.id
        }
    })

    task.name = req.body.name
    task.done = req.body.done

    task.save()

    res.json(task)
})

router.delete('/:id', async (req, res) => {
    const task = await Task.findOne({
        where: {
            id: req.params.id
        }
    })

    task.destroy()

    res.status(203).send()
})

module.exports = router