const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/school";
mongoose.connect(url);

const teacherSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    require: true,
    trim: true,
    minLength: 1,
    maxLenghth: 24,
  },
  surname: {
    type: String,
    require: true,
    trim: true,
    minLength: 1,
    maxLenghth: 24,
  },
  password: {
    type: String,
    require: true,
    trim: true,
    minLength: 1,
    maxLenghth: 24,
  },
});

const studentSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    require: true,
    trim: true,
    minLength: 1,
    maxLenghth: 24,
  },
  surname: {
    type: String,
    require: true,
    trim: true,
    minLength: 1,
    maxLenghth: 24,
  },
  class: {
    type: String,
    require: true,
    trim: true,
    minLength: 1,
    maxLenghth: 24,
  },
});

const gradeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  teacherId: {
    type: String,
    require: true,
    trim: true,
    minLength: 20,
    maxLenghth: 30,
  },
  studentId: {
    type: String,
    require: true,
    trim: true,
    minLength: 20,
    maxLenghth: 30,
  },
  subject: {
    type: String,
    require: true,
    trim: true,
    minLength: 1,
    maxLenghth: 24,
  },
  grade: {
    type: Number,
    required: false,
    default: 0,
    validate: {
      validator: function (v) {
        return v >= 0 && v <= 6;
      },
    },
    set: function (v) {
      if (v === null || v === undefined || v === "") {
        return 0;
      }
      return v;
    },
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);
const Student = mongoose.model("Student", studentSchema);
const Grade = mongoose.model("Grade", gradeSchema);

const teacher1 = new Teacher({
  _id: new mongoose.Types.ObjectId(),
  name: "John",
  surname: "Doe",
  password: "@7kQ1pW!4vE#2sD",
});

const teacher2 = new Teacher({
  _id: new mongoose.Types.ObjectId(),
  name: "Jane",
  surname: "Smith",
  password: "3tM#8nY$6sX*9cJ",
});

const teacher3 = new Teacher({
  _id: new mongoose.Types.ObjectId(),
  name: "Michael",
  surname: "Johnson",
  password: "xY9#B5$r2P&@7qZ",
});

const student1 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Harper",
  surname: "Baker",
  class: "B",
});

const student2 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Sebastian",
  surname: "Bell",
  class: "C",
});

const student3 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Emma",
  surname: "Smith",
  class: "B",
});

const student4 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Sophia",
  surname: "Brown",
  class: "A",
});

const student5 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "David",
  surname: "Davis",
  class: "B",
});

const student6 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Olivia",
  surname: "Taylor",
  class: "C",
});

const student7 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "James",
  surname: "Miller",
  class: "A",
});

const student8 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Emily",
  surname: "Wilson",
  class: "B",
});

const student9 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Daniel",
  surname: "Anderson",
  class: "C",
});

const student10 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Isabella",
  surname: "Clark",
  class: "A",
});

const student11 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "William",
  surname: "Roberts",
  class: "B",
});

const student12 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Ava",
  surname: "White",
  class: "C",
});

const student13 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Sophie",
  surname: "Harris",
  class: "A",
});

const student14 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Benjamin",
  surname: "Lee",
  class: "B",
});

const student15 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Mia",
  surname: "Jackson",
  class: "C",
});

const student16 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Henry",
  surname: "Martin",
  class: "A",
});

const student17 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Charlotte",
  surname: "Thompson",
  class: "B",
});

const student18 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Ethan",
  surname: "Lewis",
  class: "C",
});

const student19 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Amelia",
  surname: "Hall",
  class: "A",
});

const student20 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Alexander",
  surname: "Turner",
  class: "B",
});

const student21 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Grace",
  surname: "Adams",
  class: "C",
});

const student22 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Liam",
  surname: "Morris",
  class: "A",
});

const student23 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Victoria",
  surname: "Gonzalez",
  class: "A",
});

const student24 = new Student({
  _id: new mongoose.Types.ObjectId(),
  name: "Gabriel",
  surname: "Lopez",
  class: "C",
});

const grade0 = new Grade({
  _id: new mongoose.Types.ObjectId(),
  teacherId: "-------------------------",
  studentId: "-------------------------",
  subject: "----",
});

async function main() {
  try {
    const teacherArr = [teacher1, teacher2, teacher3];
    await Teacher.insertMany(teacherArr);

    const studentArr = [
      student1,
      student2,
      student3,
      student4,
      student5,
      student6,
      student7,
      student8,
      student9,
      student10,
      student11,
      student12,
      student13,
      student14,
      student15,
      student16,
      student17,
      student18,
      student19,
      student20,
      student21,
      student22,
      student23,
      student24,
    ];
    await Student.insertMany(studentArr);
    await grade0.save();
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.disconnect();
  }
}

main();
