import express from 'express';
import morganBody from 'morgan-body';
import cors from 'cors'
import repairShopRouter from './routes/repairShopsRoutes';
import { config } from 'dotenv';
import userRouter from './routes/userRoutes';
const PORT = process.env.PORT || 3333;

config({ path: ".env" }
    // Uncomment Later
    // {
    //  path: process.env.NODE_ENV === "local" ? ".env.local" : ".env",
    // }
);


const app = express();

app.use(cors({
    origin: '*',
    credentials: true,
}));

morganBody(app);

app.use(express.json());

app.use(`${process.env.URL_API_LOCAL}repairShops`, repairShopRouter);

app.use(`${process.env.URL_API_LOCAL}user`, userRouter);


app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    console.log(`Server is running on url http://localhost${process.env.URL_API_LOCAL}`);
});