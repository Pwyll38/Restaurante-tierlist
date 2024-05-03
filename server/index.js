import express from "express"
import restaurantRouter from "./routes/restaurantRoutes.js"

const app = express();
app.use(express.json())

app.use("/restaurant", restaurantRouter)

app.listen(3000, () => console.log('Example app is listening on port 3000.'));


export default app;