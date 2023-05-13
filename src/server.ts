import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const app = express();
const port = 5000;

//using cors
app.use(cors());

//database connection
async function bootstrap() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log('Database Connection Successful');

        app.get('/', (req, res) => {
            res.send('Hello World!')
          });
    }catch(err){
        console.log(`failed to connect database`, err);
    };

  };

bootstrap();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});