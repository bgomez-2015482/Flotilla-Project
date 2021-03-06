import { Router } from 'express';

import { indexController } from '../controllers/index.controller';

class IndexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
    }
}

const indexRoute = new IndexRoutes();
export default indexRoute.router;