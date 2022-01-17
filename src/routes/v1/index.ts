import { Router } from 'express';

const router = Router();

/* Author: CruzNadin - Kadir Barcın */

router.get('/Hi/:user', (req, res) => {
    // #swagger.operationId = 'getUser'
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint to fetch user by user, sample user: kadir, malik'

    switch (req.params.user) {
        case 'kadir':
            res.status(200).json({ isSuccess: true, data: { username: `User with name ${req.params.user} found` } });
            break;
        case 'malik':
            res.status(200).json({ isSuccess: true, data: { username: `User with name ${req.params.user} found` } });
            break;
        default:
            res.status(404).json({ isSuccess: false, data: { username: `User with name ${req.params.user} not found` } });
            break;
    }
});

export default router;
