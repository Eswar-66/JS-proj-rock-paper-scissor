 // const score={
    //   win:0,
    //   lose:0,
    //   tie:0
    // };


    
    
      let score=JSON.parse(localStorage.getItem('score')); 
    //  <!-- it store the val variable in local storage-->
  
  
      console.log(JSON.parse(localStorage.getItem('score')));
      if(score === null){
        score={
          win:0,
          lose:0,
          tie:0
  
        };
      }
  
       
  
        function Reset(){
  
          score.win=0;
          score.lose=0;
          score.tie=0;
          localStorage.removeItem('score');
          document.querySelector('.js-para-button').innerHTML=`Win:${score.win}, Lose:${score.lose}, TIE:${score.tie}`;
          
        }
     
  
        document.querySelector('.js-para-button').innerHTML=`Win:${score.win}, Lose:${score.lose}, TIE:${score.tie}`;


      let isAutoplaying = false;
      let intervalID;
      function autoplay(){
        if(!isAutoplaying){
            intervalID=  setInterval(()=>
            {
              const playerMove= Random();
              compare(playerMove);
            }, 1000);
            isAutoplaying = true;
          }else{
            clearInterval(intervalID);
            isAutoplaying=false;
          }

      }

      //eventlistner instead of onclick

      document.querySelector('.js-rock-button').addEventListener('click',()=>{
        compare('Rock');
      });

      //eventlistner keydown press anywhere in the webpag if we press r in keyboard rock will choose if we press p paper is choose ...

      document.body.addEventListener('keydown',(event)=>{
        console.log(event.key);
        if(event.key === 'r'){
         compare('Rock');
        }else if(event.key === 'p'){
          compare('Paper');
        }else if (event.key === 's') {
          compare('Scissor');
        }
      });
  
      function compare(playerMove){
        const computerMove=Random();
          let result='';
         
  
          if(playerMove === 'Rock')
          {
            if(computerMove === 'Rock'){
            result= 'TIE'; 
            }else if(computerMove === 'Paper'){
            result= 'You Lose'; 
            }else if(computerMove === 'Scissor'){
            result= 'You Win'; 
            }  
          }else if(playerMove === 'Paper'){
          
  
            if(computerMove === 'Rock'){
            result= 'You Win'; 
            }else if(computerMove === 'Paper'){
            result= 'TIE'; 
            }else if(computerMove === 'Scissor'){
            result= 'You Lose';
            }
          }else if(playerMove === 'Scissor'){
            if(computerMove === 'Rock'){
            result= 'You Lose'; 
            }else if(computerMove === 'Paper'){
            result= 'You Win'; 
            }else if(computerMove === 'Scissor'){
            result= 'TIE'; 
          }
          }if(result === 'You Win'){
            score.win++;
            
           
          }else if(result === 'TIE'){
            score.tie++;
          }else if(result === 'You Lose'){
            score.lose++;
          }
          localStorage.setItem('score',JSON.stringify(score));
  
          document.querySelector('.js-para-button').innerHTML=`Win:${score.win}, Lose:${score.lose}, TIE:${score.tie}`;
  
          
          document.querySelector('.js-result').innerHTML = result;
          document.querySelector('.js-move').innerHTML = `you clicked <img src="${playerMove}-emoji.png" class="img_icon1">Computer choose 
          <img src="${computerMove}-emoji.png" class="img_icon1">`;
         
         
            // alert(`you clicked ${playerMove}...Computer choose... ${computerMove}..... \n..... ${result} \n Win:${score.win} Lose:${score.lose} TIE:${score.tie}`);
        }
     function Random(){
          const randomNumber = Math.random();
          let computerMove='';
  
          if(randomNumber >= 0  && randomNumber < 1/3){
          computerMove='Rock';
          } else if (randomNumber >= 1/3  && randomNumber < 2/3){
          computerMove='Paper';
          }else if (randomNumber >= 2/3  && randomNumber < 1){
          computerMove='Scissor';
          }
          return computerMove;
        }