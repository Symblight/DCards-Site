import express from 'express';

let router = express.Router();

router.post('/login', (req, res) => {
    console.log(req.body);
});


export default router;