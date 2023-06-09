var myQuestions = [
    {
      question: "Minkä värisiä revontulet voivat olla?",
      answers: {
        a: 'vihreitä, punaisia, sinisiä',
        b: 'mustia, ruskeita',
        c: 'eivät minkään värisiä'
      },
      correctAnswer: 'a'
    },
    {
      question: "Missä revontulia näkee parhaiten?",
      answers: {
        a: 'Pääkaupunkiseudulla',
        b: 'Savossa',
        c: 'Lapissa'
      },
      correctAnswer: 'c'
    },
    {
      question: "Mitä revontulia kutsuva aurora borealis tarkoittaa?",
      answers: {
        a: 'tulta',
        b: 'pohjanpaloa',
        c: 'ruskoa'
      },
      correctAnswer: 'b'
    },
    {
      question: "Mitä latinankielinen sana aurora tarkoittaa?",
      answers: {
        a: 'sarastusta',
        b: 'paloa',
        c: 'aamuruskoa'
      },
      correctAnswer: 'c'
    },
    {
      question: "Missä revontulia näkyy eniten?",
      answers: {
        a: 'noin 20 asteen etäisyydellä maan magneettisista navoista',
        b: 'päiväntasaajalla',
        c: 'noin 45 asteen etäisyydellä maan magneettisista navoista'
      },
      correctAnswer: 'a'
    }
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      var output = [];
      var answers;
  
      for(var i=0; i<questions.length; i++){
        
        answers = [];
        for(letter in questions[i].answers){
  
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(questions, quizContainer, resultsContainer){
      
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      var userAnswer = '';
      var numCorrect = 0;
      
      for(var i=0; i<questions.length; i++){
  
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        if(userAnswer===questions[i].correctAnswer){
          numCorrect++;
          
          answerContainers[i].style.color = 'green';
        }
        else{
          answerContainers[i].style.color = 'red';
        }
      }
  
      resultsContainer.innerHTML = "Oikeat vastaukset " + numCorrect + ' / ' + questions.length;
    }
  
    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    } 
  }