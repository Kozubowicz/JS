const url = `http://api.nbp.pl/api/exchangerates/tables/a/last?format=json`;

window.onload = function () {
  getData(url);
};

function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => currency.updateRates(data));
}

class Currency {
  currencyData = [];
  num = null;
  date = null;

  updateRates(data) {
    this.currencyData = data[0].rates;
    this.num = data[0].no;
    this.date = data[0].effectiveDate;
    console.log(data);
    this.printTable();
  }

  printTable() {
    document.getElementById(
      "document"
    ).innerHTML = `Tabela kursów walut NBP nr: ${this.num} z dnia: ${this.date} <br>`;

    for (let [lp, el] of this.currencyData.entries()) {
      let tr = document.createElement("tr");
      tr.innerHTML = `       
          <td>${lp}.</td>
          <td>${el.currency}</td>
          <td>${el.code}</td>
          <td>${el.mid}</td>        
    `;
      console.log(tr);
      let tBody = document.querySelector("#currentTable tbody");
      tBody.appendChild(tr);
    }
  }
}
const currency = new Currency();
