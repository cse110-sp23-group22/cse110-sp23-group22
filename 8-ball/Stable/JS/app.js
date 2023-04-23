let questionInput;
let responses = [
    `It is certain`,
    "Without a doubt",
    "You may rely on it",
    "Yes, definitely",
    "It is decidedly so",
    "As I see it, yes",
    "Most likely",
    `Yes`,
    "Outlook good",
    "Signs point to yes",
    "Reply hazy try again",
    "Better not tell you now",
    `Ask again later`,
    "Cannot predict now",
    `Concentrate and ask again`,
    "Don't count on it",
    "Outlook not so good",
    "My sources say no",
    "Very doubtful",
    "My reply is no"
  ];
  
  let button = document.getElementById("shake-button");
  let response = document.getElementById("response");
  
  function shakeBall() {
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
  