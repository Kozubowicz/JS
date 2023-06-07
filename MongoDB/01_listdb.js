const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

async function processDB() {
  const url = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(url);

  try {
    await client.connect();

    const dblist = await client.db().admin().listDatabases();
    console.log("Databases:");
    dblist.databases.forEach((db) => console.log(db.name));
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

processDB();
