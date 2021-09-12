import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes';

mongoose.Promise = global.Promise;

const DB_URL = 
    "mongodb+srv://reneraesp:Autopropio0.@cluster0.cazyv.mongodb.net/blog?retryWrites=true&w=majority";

mongoose
    .connect(DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((mongoose)=>console.log(`conectado a la base de datos`))
    .catch(console.log);

const app = express();


app.set('port', process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

app.use("/api", router);

app.listen(app.get('port'),()=>{
    console.log('server on port:' + app.get('port'));
});