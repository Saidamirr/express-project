import express, { json } from 'express'
import mongoose from 'mongoose';
import Post from './post.js';
import router from "./router.js"


const PORT = 5000;
const DB_URL = 'mongodb+srv://admin:admin@todo-api.fd1uz.mongodb.net/?retryWrites=true&w=majority&appName=todo-api'

const app = express();

app.use(express.json())
app.use('/api', router)
 
app.get('/', (req, res) => {
    console.log(req.body)
    res.status(200).json('Server is working')
})

async function startApp() {
    try {
        mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('server started on port ' + PORT))
    } catch (error) {
        console.log(error)
    }
}

startApp()



