import express from 'express';

const routes = express.Router();
import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const itemsController = new ItemsController();
const pointsController = new PointsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.store);
routes.get('/points/:id', pointsController.show );
routes.get('/points', pointsController.index);


// Service Pattern
// Repository Pattern (Data Mapper)

export default routes;
