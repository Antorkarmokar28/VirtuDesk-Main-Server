import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './app/routes';
import globalErrorHandeling from './app/middlewares/globalErrorHandeling';
const app: Application = express();
// using parser
app.use(express.json());
app.use(cors({ origin: '', credentials: true }));
app.use(cookieParser());
// connect with application router
app.use('/api', router);
const testServer = async (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'VirtuDesk Server is running',
  });
};
app.get('/', testServer);
// Global error handling
app.use(globalErrorHandeling);
export default app;
