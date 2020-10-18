(function() {

    const p1ScoreDisplay = document.getElementById('p1Score');
    const p2ScoreDisplay = document.getElementById('p2Score');

    const wScoreDisplay = document.querySelector('p span');
    const inputScore = document.getElementById('inputScore');

    const p1Btn = document.getElementById('p1Btn');
    const p2Btn = document.getElementById('p2Btn');
    const resetBtn = document.getElementById('resetBtn');


    let p1Score = 0;
    let p2Score = 0;
    let winningScore = 5;
    let gameOver = false;


    function winner(oldScore, winningScore)
    {
        if(oldScore === winningScore)
        {
            if(p1Score === winningScore)
            {
                p1ScoreDisplay.classList.add('winner');
            }
            else{
                p2ScoreDisplay.classList.add('winner');
            }
            gameOver = true;
            p1Btn.setAttribute('disabled', 'disabled');
            p2Btn.setAttribute('disabled', 'disabled');
        }
    }


    function reset() {
        p1Score = 0;
        p2Score = 0;
        gameOver = false;

        p1ScoreDisplay.textContent = p1Score;
        p2ScoreDisplay.textContent = p2Score;

        p1ScoreDisplay.classList.remove('winner');
        p2ScoreDisplay.classList.remove('winner');

        p1Btn.removeAttribute('disabled');
        p2Btn.removeAttribute('disabled');
    }



    p1Btn.addEventListener('click', () => {
        if(!gameOver)
        {
            p1Score++;
            winner(p1Score, winningScore);
            p1ScoreDisplay.textContent = p1Score;
        }
    });

    p2Btn.addEventListener('click', () => {
        if(!gameOver) 
        {
            p2Score++;
            winner(p2Score, winningScore);
            p2ScoreDisplay.textContent = p2Score;
        }
    });


    inputScore.addEventListener('change', () => {
        winningScore = Number(inputScore.value);
        wScoreDisplay.textContent = inputScore.value;
        inputScore.value = '';
        reset();
    });

    resetBtn.addEventListener('click', reset);

})();