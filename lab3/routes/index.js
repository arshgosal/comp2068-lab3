"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
});
router.get('/myself', (req, res) => {
    res.render('myself', { name: 'Arsh' });
});
router.get('/dad', (req, res) => {
    res.render('dad', { name: 'Surjit Ram' });
});
router.get('/mom', (req, res) => {
    res.render('mom', { name: 'Balvir Kaur' });
});
router.get('/sister', (req, res) => {
    res.render('sister', { name: 'Sonal' });
});
exports.default = router;
//# sourceMappingURL=index.js.map