window.onload = function () {
  quiz.init();
};

class Quiz {
  questions = [
    {
      q: "Ile to jest 10 / 2 ?",
      answers: ["4", "5", "4.5"],
      correctAnswerNum: 1,
    },
    {
      q: "Ile to jest 16 + 2 ?",
      answers: ["18", "16", "20"],
      correctAnswerNum: 0,
    },
    {
      q: "Ile to jest 8 * 2 ?",
      answers: ["18", "10", "16"],
      correctAnswerNum: 2,
    },
  ];

  currentQuestionIndex = -1;
  heading = null;
  questionParagraph = null;
  answer0 = null;
  answer1 = null;
  answer2 = null;
  correctAnswerNum = null;
  userSelectedInput = null;
  userCorrectAnswers = 0;
  userInCorrectAnswers = 0;
  saveButton = null;
  nextButton = null;
  modalWindow = null;

  init() {
    this.heading = document.querySelector(".alert-heading");
    this.answer0 = document.querySelector("#answer0");
    this.answer1 = document.querySelector("#answer1");
    this.answer2 = document.querySelector("#answer2");
    this.questionParagraph = document.querySelector("#question");
    this.saveButton = document.querySelector("#saveButton");
    this.nextButton = document.querySelector("#nextButton");
    this.setNextQuestionData();

    this.saveButton.addEventListener("click", this.checkAnswer);
    this.nextButton.addEventListener("click", this.setNextQuestionData);

    this.initModal();
  }

  initModal = () => {
    this.modalWindow = new bootstrap.Modal(
      document.getElementById("modalWindow")
    );
    document
      .getElementById("closeModal")
      .addEventListener("click", this.restartQuiz);
  };

  checkAnswer = () => {
    this.userSelectedInput = document.querySelector(
      "input[type='radio']:checked"
    );
    if (!this.userSelectedInput) return;
    const selectedIndex = this.userSelectedInput.getAttribute("data-index");
    if (selectedIndex == this.correctAnswerNum) {
      //prawidłowa
      this.userCorrectAnswers++;
      console.log(this.userCorrectAnswers);
      this.userSelectedInput.classList.add("is-valid");
    } else {
      //nieprawidłowa
      this.userInCorrectAnswers++;
      this.userSelectedInput.classList.add("is-invalid");
    }
    this.setUserStats();

    this.saveButton.classList.add("disabled");
    this.nextButton.classList.remove("disabled");
  };

  setUserStats = () => {
    document.getElementById("correctAnswers").innerHTML =
      this.userCorrectAnswers;

    document.getElementById("inCorrectAnswers").innerHTML =
      this.userInCorrectAnswers;
  };

  setNextQuestionData = () => {
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.questions.length) {
      console.log("Koniec quizu");
      this.showModalResults();
      return;
    }
    const question = this.questions[this.currentQuestionIndex];
    const qStr = `Pytanie ${this.currentQuestionIndex + 1} z ${
      this.questions.length
    }`;

    this.heading.innerHTML = qStr + " : " + question.q;
    this.answer0.innerHTML = question.answers[0];
    this.answer1.innerHTML = question.answers[1];
    this.answer2.innerHTML = question.answers[2];
    this.correctAnswerNum = question.correctAnswerNum;

    document.querySelectorAll("input[type ='radio']").forEach((el) => {
      el.classList.remove("is-valid");
      el.classList.remove("is-invalid");
      el.checked = false;
    });

    this.nextButton.classList.add("disabled");
    this.saveButton.classList.remove("disabled");
  };

  showModalResults = () => {
    const modalParagraf = document.getElementById("modalResults");
    let information;
    if (this.userCorrectAnswers >= this.userInCorrectAnswers) {
      information = "Brawo! Przynajniej połowa z odpowiedzi jest prawidłowa.";
    } else {
      information = "Niestety, mniej niż połowa odpowiedzi jest prawidłowa.";
    }
    information += `</br></br>Prawidłowe odpowiedzi: ${this.userCorrectAnswers}
    </br>Błędne odpowiedzi: ${this.userInCorrectAnswers}`;

    modalParagraf.innerHTML = information;

    this.modalWindow.toggle();
  };

  restartQuiz = () => {
    this.currentQuestionIndex = -1;
    this.userCorrectAnswers = 0;
    this.userInCorrectAnswers = 0;
    this.setUserStats();
    this.setNextQuestionData();
  };
}
const quiz = new Quiz();
