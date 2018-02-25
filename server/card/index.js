// api card

import express from 'express';

let router = express.Router();

router.get('/card/id=:id', (req, res) => {
    console.log(req.params,id, "ID CARD");
});


export default router;