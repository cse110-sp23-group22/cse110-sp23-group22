var responses;  //response typed by js


let button = document.getElementById("shake-button");//button element
let output = document.getElementById("response");//output element
let selection = document.getElementById("langMenu");//language selection

//collects user input and outputs the magic 8 ball answer
  async function shakeBall() {
      let audio = document.getElementById("myAudio");
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
      audio.play();
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

  //Function sets the language of the app based on user input
async function langMenuChange () {


    let responsePath; //path to the json file of the language selected
    let langLabel = document.getElementById("langLabel");//label for lang menu
    let header = document.getElementById("header");//header element
    let namePrompt = document.getElementById("namePrompt");//label for name input
    let qPrompt = document.getElementById("qPrompt");//label for question input

    //switch statment to set the responsePath variable depending on the selected language
    //and the prompt names
    switch (selection.value) {
        case "spanish":
            responsePath='Assets/Spanish.json';
            langLabel.innerHTML="Elige el idioma del Magic 8-ball";
            namePrompt.innerHTML="escribe su nombre";
            qPrompt.innerHTML="escriba su pregunta";
            header.innerHTML="Pregúntale al Magic 8-ball";
            break;
        case "english":
            responsePath = 'Assets/English.json';
            langLabel.innerHTML="Choose 8-Ball Language:";
            namePrompt.innerHTML="Enter Your Name:";
            qPrompt.innerHTML="Enter Your Question:";
            header.innerHTML="Ask the Magic 8-Ball";
            break;
        case "chinese":
            responsePath = "Assets/Chinese.json";
            langLabel.innerHTML="请选择Magic 8-ball的语言";
            namePrompt.innerHTML="请输入你的名字";
            qPrompt.innerHTML="请输入你的问题";
            header.innerHTML="向Magic 8-ball提问";
            break;
        default:
            responsePath = 'Assets/English.json';
            langLabel.innerHTML="Choose 8-Ball Language:";
            namePrompt.innerHTML="Enter Your Name:";
            qPrompt.innerHTML="Enter Your Question:";
            header.innerHTML="Ask the Magic 8-Ball";
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
//initial loading of the json file
langMenuChange();

  //event listeners for click and lang menu state change.
  button.addEventListener("click", shakeBall);
  selection.addEventListener("change", langMenuChange);
  