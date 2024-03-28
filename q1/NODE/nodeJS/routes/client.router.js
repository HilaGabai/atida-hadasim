import express from 'express';
import clientcontroller from '../controllers/client.controller.js';

const router = express.Router();
const client = new clientcontroller();

router.get('/', client.getAllClients)
router.post('/addClient', client.addClient)
router.delete('/deleteClient/:id', client.deleteClient)
router.put('/updateClient/:id', client.updateClient)

export default router;