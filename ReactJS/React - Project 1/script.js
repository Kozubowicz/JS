//First React.Js project
//It's supposed to be simple static site

const page = (
  <div>
    <img src="logo.png" width="200px" height="200px" />

    <h1>Fun facts about React.Js</h1>

    <ul>
      <li>Was first relased in 2013</li>
      <li>Was orginaly created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including o=mobile ones</li>
    </ul>
  </div>
);
ReactDOM.render(page, document.getElementById("main"));
