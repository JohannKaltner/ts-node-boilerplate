import express from 'express';
import morganBody from 'morgan-body';
import cors from 'cors'
import repairShopRouter from './routes/repairShopsRoutes';
import { config } from 'dotenv';
const PORT = process.env.PORT || 3333;

config({ path: ".env" }
    // Uncomment Later
    // {
    //  path: process.env.NODE_ENV === "local" ? ".env.local" : ".env",
    // }
);

const app = express();


const corsOptions = {
    origin: 'http://localhost:3333'
};

morganBody(app);


app.use(process.env.URL_API_LOCAL + "oficinas", repairShopRouter);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    console.log(`Server is running on url http://localhost${process.env.URL_API_LOCAL}`);
});