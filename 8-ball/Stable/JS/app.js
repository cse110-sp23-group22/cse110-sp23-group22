var responses;  //response typed by js


let button = document.getElementById("shake-button");//button element
let output = document.getElementById("response");//output element
let selection = document.getElementById("langMenu");//language selection

//collects user input and outputs the magic 8 ball answer
  async function shakeBall() {

      //let lang = document.getElementById("langMenu").value;//language selected by user





      //reset the output tag
      output.innerHTML='';
      output.classList.remove("mystical");

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
              output.classList.add("mystical");
          }
      }, 600);
  }

  /*  */
async function langMenuChange () {
    //switch statment to set the responsePath variable depending on the selected language
    console.log(selection.value);
    let responsePath; //path to the json file of the language selected
    let langLabel = document.getElementById("langLabel");
    let header = document.getElementById("header");
    let namePrompt = document.getElementById("namePrompt");
    let qPrompt = document.getElementById("qPrompt");

    switch (selection.value) {
        case "spanish":
            responsePath='Assets/Spanish.json';
            langLabel.innerHTML="lalalala";
            namePrompt.innerHTML="lalalala";
            qPrompt.innerHTML="lalalala";
            header.innerHTML="lalalal";
            break;
        case "english":
            responsePath = 'Assets/English.json';
            langLabel.innerHTML="D";
            namePrompt.innerHTML="d";
            qPrompt.innerHTML="d";
            header.innerHTML="l56";
            break;
        case "chinese":
            responsePath = "Assets/Chinese.json";
            langLabel.innerHTML="c";
            namePrompt.innerHTML="c";
            qPrompt.innerHTML="c";
            header.innerHTML="l2l";
            break;
        default:
            responsePath = 'Assets/English.json';
            langLabel.innerHTML="defaultttttttt";
            namePrompt.innerHTML="d";
            qPrompt.innerHTML="d";
            header.innerHTML="1111";
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
}
langMenuChange();
  button.addEventListener("click", shakeBall);
  selection.addEventListener("change", langMenuChange);
  