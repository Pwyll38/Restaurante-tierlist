import { AppDataSource } from "./data-source"
import { Restaurant } from "./entity/Restaurant"

AppDataSource.initialize()
    .then(async () => {

    console.log("Inserting a new user into the database...")
    const rest = new Restaurant()
    rest.id = 1
    rest.name = "Test"
    rest.quality = 0
    rest.price = 0
    rest.ambience = 0
    await AppDataSource.manager.save(rest)
    console.log("Saved a new user with id: " + rest.id)

    const test: Restaurant[] = await AppDataSource.manager.find(Restaurant)
    console.log("Instances", test);
    


}).catch(error => console.log(error))
