import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import UserRoutes from './routes/users.js';

const app = express();

app.use('/posts', postRoutes)
app.use('/register', UserRoutes)
app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://karimdarakji:Viewsonic11@cluster0.aw1wt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
       .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);