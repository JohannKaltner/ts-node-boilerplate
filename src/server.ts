import express from 'express';
import morganBody from 'morgan-body';
import cors from 'cors'

const PORT = process.env.PORT || 3333;

const app = express();

const corsOptions = {
    origin: 'http://localhost:3333'
};

morganBody(app);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});