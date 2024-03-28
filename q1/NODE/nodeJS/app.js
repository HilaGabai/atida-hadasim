import { connect } from "./db.js";
import Clientrouter from "./routes/client.router.js"
import cors from 'cors';
import bodyParser from "body-parser";

import express from "express"
import dotenv from 'dotenv'
dotenv.config();
const app = express();
const port = 5000;
connect();
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json());
app.use('/clients', Clientrouter);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
});

export default app;


