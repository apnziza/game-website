const scoreBoard = document.getElementById('scores-display');
const scoresBtn = document.getElementById('scores');
const closeScores = document.getElementById('close-scores');


scoresBtn.addEventListener('click', () => {
  scoreBoard.style.visibility = "visible";
});

closeScores.addEventListener('click', () => {
  scoreBoard.style.visibility = "hidden";
});

const scoresUl = document.createElement('ul');

for(let i=0; i<scores.length; i++){
  const li = document.createElement('li');
  li.innerText = `${scores[i].email}: ${scores[i].myScore}%`;
  scoresUl.appendChild(li);
}

scoreBoard.appendChild(scoresUl);