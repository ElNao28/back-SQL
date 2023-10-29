import {createPool} from 'mysql2/promise'
import {host,port,user,password,database} from './config.js'

export const pool = createPool({
    host: host,
    user: user,
    password: password,
    port: port,
    database: database
})