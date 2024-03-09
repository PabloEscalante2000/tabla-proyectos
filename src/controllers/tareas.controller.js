import {pool} from '../db.js';

export const getTarea =  async(req,res)=>{
    try {
        const [rows] = await pool.query("call obtenerTarea(?)",[req.params.id])
        res.send(rows[0])
    } catch(err){
        return res.status(500).json({
            message:"Something goes wrong"
        })
    }
    
}

export const getTareas = async (req,res)=>{
    try {
        const [rows] = await pool.query("call obtenerTareas()")
        res.send(rows[0])
    } catch (err) {
        return res.status(500).json({
            message:"Something goes wrong"
        })
    }
    
}

export const postTareas = async (req,res)=>{
    try {
        const {nombre,descripcion} = req.body
        const [rows] = await pool.query("call crearTarea(?,?)",[nombre,descripcion])
        res.send({
            rows
        })
    } catch(err){
        return res.status(500).json({
            message:"Something goes wrong"
        })
    }
    
}

export const putTareas = async (req,res)=>{

    try {
        const {id} = req.params
        const {nombre,descripcion,estado} = req.body
        
        const [result] = await pool.query("call actualizarTarea(?,?,?,?)",[id,nombre,descripcion,estado])
        console.log(result);

        if(result.affectedRows === 0) return res.status(404).json({
            message:"Tarea no encontrada"
        })

        res.json("recieved")
    } catch(err){
        return res.status(500).json({
            message:"Something goes wrong"
        })
    }

    
}

export const deleteTareas = async(req,res)=>{

    try {
        const [result] = await pool.query("call borrarTarea(?)",[req.params.id])
        if(result.affectedRows <= 0){
            return res.status(404).json({message: "Tarea no encontrada"})
        } else {
            res.sendStatus(204)
        }
    } catch(err){
        return res.status(500).json({
            message:"Something goes wrong"
        })
    }    
}