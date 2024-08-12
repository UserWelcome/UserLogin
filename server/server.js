const express=require('express');
const mongoose= require('mongoose');
const cors= require('cors');
require('dotenv').config();
const app = express();
const PORT=process.env.PORT;

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Connected to DB'))
.catch((err)=> console.log("error in coonectiom",err))

//middleware
app.use(cors());
// app.use(cors(
//     {
//         origin: ["https://userlogin-b8yq.onrender.com","localhost:4000"],
//         methods: ["POST", "GET"],
//         credentials: true
//     }
// ));
 app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, 
    Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });
app.use(express.json());

app.use('/api/auth', require('./routes/user_routes'));

app.listen(PORT,()=>{
    console.log('server is running on port $ {PORT}',PORT);
});
