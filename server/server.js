import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/Webhooks.js';

//intialize express
const app = express();

//connect to database
await connectDB();

//middleware
app.use(cors());

//Route
app.get("/", (req, res) => res.send("Hello World"));
app.post('/clerk', express.json(), clerkWebhooks);




//Port
const PORT = process.env.PORT || 5000;

//Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);