import express from 'express';
import entryRoutes from './routes/entry.routes';
import { errorHandler } from './middleware/entry.middleware';


const app = express();


app.use(express.json());
app.use('/api/entries', entryRoutes);


// health check
app.get('/health', function (req, res) {
res.json({ success: true, message: 'OK' });
});


app.use(errorHandler);


export default app;