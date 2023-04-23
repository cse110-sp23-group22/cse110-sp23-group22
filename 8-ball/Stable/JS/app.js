let responses;  //response typed by js


  let button = document.getElementById("shake-button");//button element
  let output = document.getElementById("response");//output element

//collects user input and outputs the magic 8 ball answer
  async function shakeBall() {

      let lang = document.getElementById("langMenu").value;//language selected by user
      let responsePath; //path to the json file of the language selected

      //switch statment to set the responsePath variable depending on the selected language
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

      //load in the json file selected
      await fetch(responsePath)

          // Parse the JSON data
          .then(response => response.json())
          .then(data => {
              responses = data["responses"];
          })
          .catch(error => {
              console.error('Error fetching JSON file:', error);
          });

      //reset the output tag
      output.innerHTML='';

      //get random number to use for the 8ball array
      let index = Math.floor(Math.random() * responses.length);

      //get the question and name input by user
      let questionInput = document.getElementById("question").value;
      let nameInput = document.getElementById("name").value;

      //add shake class so button does css animations
      button.classList.add("shake");

      //timeout to show the output after the 8-ball animation is over
      setTimeout(() => {

          //remove shake class for consecutive uses
          button.classList.remove("shake");

          //check for empty answers
          if (questionInput == '' || nameInput == '') {
              alert("No input");
          } else {
              output.textContent = `${responses[index]} ${nameInput}`;
          }
      }, 600);
  }
  
  button.addEventListener("click", shakeBall);
  