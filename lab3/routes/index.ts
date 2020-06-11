/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
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



export default router;