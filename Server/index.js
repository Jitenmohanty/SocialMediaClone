import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRouter from './routes/posts.js'

const app = express();
app.use('/posts',postRouter)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://jitenmohanty:socialmedia@socialmedia.6ulnknm.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(` Server running on ${PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
