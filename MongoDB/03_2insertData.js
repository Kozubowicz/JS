const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

async function processDB() {
  const url = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db("schooldbtest");

    let collection = db.collection("grades");

    const grades = [
      { studentID: "649346affb641fa89fce7927", subject: "Mathematics", grade: [2, 3, 2, 5] },
      { studentID: "649346affb641fa89fce7928", subject: "Mathematics", grade: [3, 4, 3, 2] },
      { studentID: "649346affb641fa89fce7929", subject: "Mathematics", grade: [5, 2, 3, 2] },
      { studentID: "649346affb641fa89fce792a", subject: "Mathematics", grade: [4, 4, 2, 4] },
      { studentID: "649346affb641fa89fce792b", subject: "Mathematics", grade: [4, 4, 3, 4] },
    ];

    const options = { ordered: true }; //jeśli jeden wpis będzie nie poprawny to wszystkie nie zostną dodane

    const result = await collection.insertMany(grades, options);
    console.log(`${result.insertedCount} students grades were saved`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

processDB();
