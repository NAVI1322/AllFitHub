import 'dotenv/config';
import express from "express"
import cors from 'cors'
import authRoute from "./routes/authRoute.js"

const port = process.env.PORT || 4000 ;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRoute);




app.listen(port, () => console.log(`Server up at ${port}`));