import express from "express"
import cors from "cors"
import restaurantRouter from "./routes/restaurantRoutes.js"
import "dotenv/config"

const app = express();
app.use(express.json())
app.use(cors())

app.use("/restaurant", restaurantRouter)

//app.listen(3000, () => console.log('Example app is listening on port 3000.'));
app.listen(process.env.PORT, () => console.log('Example app is listening on '+ process.env.PORT));


export default app;