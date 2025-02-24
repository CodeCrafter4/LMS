import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import { clerkWebhooks, stripeWebhooks } from './controllers/Webhooks.js';
import educatorRouter from './routes/educatorRoutes.js';
import { clerkMiddleware } from '@clerk/express';
import connectCloudinary from './configs/cloudinary.js';
import courseRouter from './routes/courseRoute.js';
import userRouter from './routes/userRoutes.js';

//intialize express
const app = express();

//connect to database
await connectDB();
await connectCloudinary();

//middleware
app.use(cors());
app.use(clerkMiddleware())

//Route
app.get("/", (req, res) => res.send("Hello World"));
app.post('/clerk', express.json(), clerkWebhooks);
app.use('/api/educator', express.json(), educatorRouter);
app.use('/api/course', express.json(),courseRouter)
app.use('/api/user', express.json(),userRouter)
app.post('/stripe', express.raw({type:'application/json'}),stripeWebhooks)




//Port
const PORT = process.env.PORT || 5000;

//Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);