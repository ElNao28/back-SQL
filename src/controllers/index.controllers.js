import {pool} from '../db.js'

export const pin = async(req, res)=>{
    const [result] = await pool.query('SELECT "pong" AS result')
    res.json(result)
}