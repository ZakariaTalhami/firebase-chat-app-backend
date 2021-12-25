import express, { Router } from 'express'
import messagingRouters from "./messaging";
import router from './messaging/messagingRouter';

export const allRouters =  [
    ...messagingRouters
]

export const registerAllRouters = (app: express.Express, routers: Router[] = allRouters) => {
    routers.forEach(router => {
        app.use(router);
    });
}