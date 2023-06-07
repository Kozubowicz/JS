const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/mongoosetelephones";
mongoose.connect(url);

const telephoneSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, //id tworzy sie automatycznie nie ma konieczności jego określania tutaj
  brand: {
    type: String,
    require: true,
    trim: true,
    minLength: 1,
    maxLenghth: 24,
  },
  name: {
    type: String,
    require: true,
    trim: true,
    minLength: 1,
    maxLenghth: 24,
  },
  color: {
    type: String,
    require: false,
    enum: ["red", "yellow", "green", "black", "silver", "white", "gold"],
  },
  age: {
    type: Number,
    require: false,
    default: 0,
    validate: {
      validator: function (v) {
        return v >= 0;
      },
      message: "Age can't be negative",
    },
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Telephone = mongoose.model("Telephone", telephoneSchema);

const telephone1 = new Telephone({
  _id: new mongoose.Types.ObjectId(),
  brand: "Nokia",
  name: "Z1 compact",
  color: "green",
  age: 2,
});

const telephone2 = new Telephone({
  _id: new mongoose.Types.ObjectId(),
  brand: "Sony",
  name: "One",
  color: "black",
  age: 0,
});
const telephone3 = new Telephone({
  _id: new mongoose.Types.ObjectId(),
  brand: "Motorola",
  name: "G one",
  color: "silver",
  age: 1,
});

async function main() {
  try {
    await Telephone.deleteOne({ brand: "Nokia" });

    await Telephone.deleteMany({});

    const telephone1Db = await telephone1.save();
    const telephoneArr = [telephone2, telephone3];

    await Telephone.insertMany(telephoneArr);
    const telephoneByBrand = await Telephone.findById(telephone1Db._id);

    //console.log(telephoneByBrand);
    const telDb = await Telephone.findOne({
      brand: "Sony",
      color: "black",
    });
    console.log(telDb);

    const updatedTelDb = await Telephone.findOneAndUpdate(
      {
        brand: "Sony",
        color: "black",
      },
      {
        color: "green",
        age: 4,
      },
      {
        new: true,
      }
    );
    console.log(updatedTelDb);
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.disconnect();
  }
}

main();
