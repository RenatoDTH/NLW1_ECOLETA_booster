import express from 'express';
import knex from './database/connection';

import PointsController from './controllers/PointsController'
//const pointsController = new PointsController();

const routes = express.Router();

routes.get('/items', async (req, res) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return { 
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
         }
    })

    return res.json(serializedItems);
 });

 routes.post('/points', PointsController.create)
 
export default routes;