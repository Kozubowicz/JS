const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

async function initDB() {
  const url = "mongodb://127.0.0.1:27017";
  let client = null;
  try {
    client = await new MongoClient(url);
    return client;
  } catch (err) {
    console.log(err);
  }
}

async function addDataToDB(client) {
  try {
    const db = client.db("carsTestDb");
    let collection = db.collection("cars");

    const cars = [
      { brand: "Toyota", name: "Yaris", year: 2018 },
      { brand: "Honda", name: "Civic", year: 2022 },
      { brand: "Ford", name: "Yamaha", year: 2011 },
    ];

    const result = await collection.insertMany(cars, { ordered: true });
    console.log(` ${result.insertedCount} Cars were saved`);
  } catch (err) {
    console.log(err);
  }
}

async function showCars(collection, options = {}, resultsLimit = 5) {
  try {
    let cursor = collection.find(options).limit(resultsLimit);
    let results = await cursor.toArray();

    if (results.length > 0) {
      console.log(`Found ${results.length} listing(s):`);

      results.forEach((element) => {
        console.log(element);
      });
      return results;
    } else {
      console.log("No results");
      return null;
    }
  } catch (err) {
    console.log(err);
  }
}

async function updateCarsByName(collection, name, updateFields) {
  await collection.updateMany({ name }, { $set: updateFields });
}

async function updateCarByName(collection, name, updateFields) {
  await collection.updateOne({ name }, { $set: updateFields });
}

async function deleteCarsByName(collection, name) {
  return await collection.deleteMany({ name });
}

async function main() {
  let client = null;
  try {
    client = await initDB();

    //await addDataToDB(client);
    const collection = client.db("carsTestDb").collection("cars");

    let result = await deleteCarsByName(collection, "Yamaha");
    console.log(`Deleted ${result.deletedCount} cars`);

    const cars = await showCars(collection, {}, 10);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

main();
