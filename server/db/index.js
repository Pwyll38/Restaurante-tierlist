import pkg from 'pg'
const { Pool } = pkg;
import "dotenv/config"

/*const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "1234",
    port: 5432,
})*/

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "1234",
    port: 5432,
})

pool.connect((err, client, release) => {
    if (err) {
        console.error('Error acquiring client', err.stack);
    }else{
    console.log('Connected to PostgreSQL database!');}
});


export default pool