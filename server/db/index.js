import pkg from 'pg'
const { Pool } = pkg;

/*const pool = new Pool({ //Local
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "1234",
    port: 5432,
})*/

/*const pool = new Pool({ //Vercel
    user: "defaut",
    host: "ep-young-voice-a4nornpb-pooler.us-east-1.aws.neon.tech",
    database: "verceldb",
    password: "kSxmKn81dHMI",
    port: 5432,
})*/

const pool = new Pool({

    connectionString: "postgres://default:kSxmKn81dHMI@ep-young-voice-a4nornpb-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
  
  })

pool.connect((err, client, release) => {
    if (err) {
        console.error('Error acquiring client', err.stack);
    }else{
    console.log('Connected to PostgreSQL database!');}
});


export default pool