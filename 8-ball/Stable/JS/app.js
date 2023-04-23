let questionInput;
let responses;


  let button = document.getElementById("shake-button");
  let response = document.getElementById("response");
  //console.log(responses);
  async function shakeBall() {
      let lang = document.getElementById("langMenu").value;
      let responsePath;
      switch (lang) {
          case "english":
              responsePath = 'Assets/English.json';
              break;
          case "chinese":
              responsePath = "Assets/Chinese.json";
              break;
          default:
              responsePath = 'Assets/English.json';
              break;
      }
      console.log(responsePath);

      await fetch(responsePath)
          .then(response => response.json()) // Parse the JSON data
          .then(data => {
              console.log(data); // Log the parsed JSON data to the console

              responses = data["responses"];
              console.log(responses);
          })
          .catch(error => {
              console.error('Error fetching JSON file:', error);
          });

      response.innerHTML='';
      let index = Math.floor(Math.random() * responses.length);
      questionInput = document.getElementById("question").value;
      let nameInput = document.getElementById("name").value;
      let button = document.getElementById("shake-button");
      button.classList.add("shake");

      setTimeout(() => {
          button.classList.remove("shake");
          if (questionInput == '' || nameInput == '') {
              alert("No input");
          } else {
              response.textContent = `${responses[index]} ${nameInput}`;
          }
      }, 600);
      console.log(questionInput);
      console.log(nameInput);
  }
  
  button.addEventListener("click", shakeBall);
  