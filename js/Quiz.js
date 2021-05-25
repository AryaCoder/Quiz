class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
      question.hide()
    //write code to change the background color here
    background("blue")
    // write code to show a heading for showing the result of Quiz
    text("Result : ",800,20)
    //call getContestantInfo( ) here
     Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    
    if(allContestants !== undefined){
    var y = 200
      fill("red")
     textSize(20)
     text("Contestant Who Answered Correct Will Be hilighted in GREEN",375,40)
    for(var ans in allContestants){
      var correctAns = '2'
    if(correctAns === allContestants[ans].answer){
      fill("green")
    }else{fill("red")}
    y+=30  
    text(allContestants[ans].name + " - "+ allContestants[ans].answer,375,y )
  }
    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
