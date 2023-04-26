var responses;  //response typed by js
var audioPath;


let button = document.getElementById("shake-button");//button element
let output = document.getElementById("response");//output element
let selection = document.getElementById("langMenu");//language selection

//collects user input and outputs the magic 8 ball answer
  async function shakeBall() {
      let audio = document.getElementById("myAudio");
      let textToSpeach = document.getElementById("textSpeach");
      let userPrompt = document.getElementById("clickPrompt");

      //reset the output tag
      output.innerHTML='';
      output.classList.remove("mystical");
      
      //add css 8-ball "click to shake" prompt
      userPrompt.classList.add("prompter");
    
      //get random number to use for the 8ball array
      let index = Math.floor(Math.random() * responses.length);

      //handle audio tag src attribute and set to the corresponding index of the
      //response array. Index+1, bc the audio files start from 1.wav
      textToSpeach.src=`${audioPath}/${index+1}.wav`;
      console.log(textToSpeach.src);

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
        //   userPrompt.classList.remove("prompter");
        //   check for empty answers
          if (nameInput.replace(/\s+/g, '') == ''){
            alert("No name input");
          }
          else if (questionInput.replace(/\s+/g, '') == '') {
              alert("No question input");
          } 
          else {
              // fade out
                userPrompt.classList.add("fader");
              // Output text (and make it prettier)
              output.textContent = `${responses[index]} ${nameInput}`;
              output.classList.add("mystical");
            
              setTimeout(() => {

                textToSpeach.play();
              }, 2100);
          }
      }, 600);
  }

//Function sets the language of the app based on user input
async function langMenuChange () {


    let responsePath; //path to the json file of the language selected
    let langLabel = document.getElementById("langLabel"); //label for lang menu
    let header = document.getElementById("header"); //header element
    let namePrompt = document.getElementById("namePrompt"); //label for name input
    let qPrompt = document.getElementById("qPrompt"); //label for question input

    //switch statment to set the response and audio paths variables depending on the selected language
    //and the prompt names
    switch (selection.value) {
        case "spanish":
            audioPath='Assets/voices/sp'
            responsePath='Assets/Spanish.json';
            langLabel.innerHTML="Elige el idioma del Magic 8-ball";
            namePrompt.innerHTML="escribe su nombre";
            qPrompt.innerHTML="escriba su pregunta";
            header.innerHTML="Pregúntale al Magic 8-ball";
            break;
        case "english":
            audioPath='Assets/voices/en'
            responsePath = 'Assets/English.json';
            langLabel.innerHTML="Choose 8-Ball Language:";
            namePrompt.innerHTML="Enter Your Name:";
            qPrompt.innerHTML="Enter Your Question:";
            header.innerHTML="Ask the Magic 8-Ball";
            break;
        case "chinese":
            audioPath='Assets/voices/cn'
            responsePath = "Assets/Chinese.json";
            langLabel.innerHTML="请选择Magic 8-ball的语言";
            namePrompt.innerHTML="请输入你的名字";
            qPrompt.innerHTML="请输入你的问题";
            header.innerHTML="向Magic 8-ball提问";
            break;
        default:
            audioPath='Assets/voices/en'
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

// const clickprompter = document.getElementById("clickPrompt");
// clickprompter.addEventListener('click', () => {
//     clickprompter.style.display = 'none';
// });
  //event listeners for click and lang menu state change.
  button.addEventListener("click", shakeBall);
  selection.addEventListener("change", langMenuChange);

//get the body element
const container = document.querySelector('.stars-container');

//create a 100 stars in the background using div classes
for (let i = 0; i <= 100; i++) {

    //create the div elements and append to the body
    const star = document.createElement('div');
    star.classList.add('star');

    //select the positions at random
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    container.appendChild(star);
}
