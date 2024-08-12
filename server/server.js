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
app.use(cors(
    {
        origin: ["https://userlogin-b8yq.onrender.com","localhost:3000"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json());

app.use('/api/auth', require('./routes/user_routes'));

app.listen(PORT,()=>{
    console.log('server is running on port $ {PORT}',PORT);
});