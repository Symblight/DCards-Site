import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
    console.log(req.body);
});


export default router;