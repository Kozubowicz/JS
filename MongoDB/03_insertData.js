const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

async function processDB() {
  const url = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db("schooldbtest");

    let collection = db.collection("students");

    await collection.insertOne({ name: "Kasia", email: "Kasis202@gmail.com" });
    await collection.insertOne({ name: "Dorota", email: "Dorcia19@gmail.com" });

    const students = [
      { name: "Basia", email: "Barbarcia00@gmail.com" },
      { name: "Sandra", email: "SandraJ202@gmail.com" },
      { name: "Ola", email: "Aleksa22@gmail.com" },
    ];

    const options = { ordered: true }; //jeśli jeden wpis będzie nie poprawny to wszystkie nie zostną dodane

    const result = await collection.insertMany(students, options);
    console.log(`${result.insertedCount} students were saved`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

processDB();
