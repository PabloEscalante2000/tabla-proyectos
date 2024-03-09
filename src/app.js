import express from 'express';
import {pool} from './db.js';
import cors from 'cors';
import tareasRoutes from './routes/tareas.routes.js';
import "./config.js"


const app = express()

app.use(express.json())
app.use(cors())

//* Prueba de query
app.get("/ping", async (req,res)=>{
    const [result] = await pool.query("select 'Pong' as result")
    res.json(result)
})

app.use('/api',tareasRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        message:"endopoint not found"
    })
})

export default app;