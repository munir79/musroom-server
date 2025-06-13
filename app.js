

import express from 'express';
import cors from 'cors';
import { notFound } from './src/middleware/notfound.js';
import { globalErrorHandler } from './src/middleware/globalerrorHandelar.js';
import { UserRouter } from './src/modules/users/users.route.js';

const app = express();

//middleware 

app.use(cors())
app.use(express.json());

// api router 

app.use('/api/v1/users',UserRouter);


// error middlewares

app.use(notFound);
app.use(globalErrorHandler);

export default app;