'use strict';// undeclared variables not allowed

function handleStartClicked() {
  $('main').on('click','#start',event=> {
    let html= `
        <div class='message'>
          <h1>WORK HARD, PLAY HARD</h1> 
          <p> As <strong>software developers</strong>, we love to learn and have fun and what better way to do that than to play a round of trivia. One of our favorite ways to wait while our test suite is running is to hop over to the <strong>#gameschannel</strong> on Slack and play a quick round of trivia. Playing trivia isn't just a fun way to learn something new but also a great way to take a little break from normal work task</p>
          <button type='button' id='header'>GOT IT</button>
        </div>
      `;
    $('.main').html(html);
  })
} 

function handlegotItClicked(){
  //this function display the question 
  $('main').on('click','.message',event =>renderAQuestion());
};

function updateQuestionAndScore() {
  const html= `
  <div class='result'> Question: ${user.currentQuestion+1}/${quizBank.length} </div> 
  <div class='result'> Score: ${user.score}/${quizBank.length} </div> `;
  $('.questions-scores').html(html);
}

function generateQuestion(item){
  return `
    <form class='js-questions' method='post'>
        <h1>${item.question}</h1>
        <div class='options'></div>
        <div class='button'>
          <button type='submit' id='submit'> SUBMIT </button>
        </div> 
    </form>`;
}


function generateOptions(array,item) {
  let optionHtml='';
  for (let i=0; i<array.length;i++) {
      optionHtml += `
      <div class='option'>
        <input type='radio' name='option' id='${item.id}-${i}' value='${array[i]}'>
        <label for='${item.id}-${i}'>${array[i]}</label>
      </div>`
  };
  return optionHtml;
}

function renderAQuestion(){
  updateQuestionAndScore();
  let question= quizBank[user.currentQuestion];
  let options=question.option; 
  const html= generateQuestion(question);
  $('.main').html(html);//replace the html of main class
  const optionHtml= generateOptions(options,question);
  $('.options').html(optionHtml);
  //user.currentQuestion ++;
};

function createAlertBox (message) {
  return `
    <form id='js-alert' method='post'>
        <p class='alertMessage'> ${message}</p>
        <div class='button'>
          <button type='submit'id='OK'>OK</button>
        </div>
    </form>
  `
}

function handleAnswerSubmitted(){
  $('main').on('submit','.js-questions',event=>{
    event.preventDefault();
    $('.js-questions').hide();
    let result=quizBank[user.currentQuestion].answer;
    //this function (1)'receive' the Answer 'submited' by the user, (2)compare it with the 'result', (3) alert the user if his/her ans is correct or not, (4) update the score and the current question.
    //Q: we can't use let/const to assign the property value to a variable
    user.answer= $("input[name='option']:checked").val();
    if (!user.answer) {
      $('.main').append(`${createAlertBox('Please choose an option!')}`);
      $('.alertMessage').toggleClass('yellow');
    }
    else if (user.answer===result) {
      $('.main').append(`${createAlertBox('Your answer is correct.')}`);
      $('.alertMessage').toggleClass('green');
      user.score ++;
      user.currentQuestion ++;
    }
    else {
      $('.main').append(`${createAlertBox(`Sorry, the correct answer is '${result}'.`)}`);
      $('.alertMessage').toggleClass('red');
      user.currentQuestion ++;
    }
  });
};
/*
function enterKey() {
  $(document).keypress(event=>{ 
    let keycode = (event.keyCode ? event.keyCode : event.which); 
    if(keycode == '13'){ 
      $('#js-questions').show();
      $('.alert').empty();
      user.currentQuestion === quizBank.length?
      renderFinalScreen():renderAQuestion();
    } 
  })
}
*/

function handleOKClicked() {
  $('main').on("click",'#OK',event=>{
    event.preventDefault();
    $('#js-questions').show();
    $('.alert').empty();
    user.currentQuestion === quizBank.length?
    renderFinalScreen():renderAQuestion();
  });
}

function renderFinalScreen() {
  let finalHtml= `
    <div class='final-screen'>
      <div class='message'>
        <p>THANK YOU</p>
        <p> You have completed your quiz. Your score is <span class='span'> ${user.score}/${quizBank.length} </span>. What would you like to do next?</p>
      </div>
      <div class='button'>
        <button type='select' ID='exit'>EXIT</button>
        <button type='select' ID='startOver'>START OVER</button>
      </div>
    </div>` ;
  user.currentQuestion=0;
  user.score=0;
  $('.questions-scores').empty();
  $('.main').html(finalHtml);
}

function restartQuiz() {
  $('main').on('click','#startOver', event=> renderAQuestion());
}
function exitQuiz() {
  $('main').on('click','#exit', event=>location.reload());
}

function runQuizApp() {
  handleStartClicked();
  handlegotItClicked();
  handleAnswerSubmitted();
  handleOKClicked();
  restartQuiz();
  exitQuiz();
} 
$(runQuizApp);