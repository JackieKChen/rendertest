import express from 'express';
var router = express.Router();

router.get('/', (req, res) => {
    res.send('this is desserts section');
});

router.get('/1', (req, res) => {
    res.send('chocolate cake');
});

router.get('/2', (req, res) => {
    try{
        throw(new error("Fake Error"))

    res.send("dessert 3")
     } catch(err) {
        console.log(err)
        res.status(500).send("error loading desserts")
    }
});


export default router;