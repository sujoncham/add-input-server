const express = require('express');
const { getCategory, addCate, getCatById, updateCatById, deleteCate } = require('../controllers/cate.controller');

const catRouter = express.Router()


catRouter.get('/', getCategory);
catRouter.post('/addCate', addCate);
catRouter.get('/:id', getCatById);
catRouter.put('/:id', updateCatById);
catRouter.delete('/:id', deleteCate);

module.exports = catRouter;