class Final {
  constructor(count, totalAmount) {
    this.scoreElement = document.querySelector('.score');
    this.againButton = document.querySelector('#again');

    this.render(count, totalAmount);
    this.againButton.addEventListener('click', location.reload.bind(location));
  }

  render(count, totalAmount) {
    this.scoreElement.innerHTML = `You answered ${count} out of ${totalAmount} correct!`;
    const result = (count/totalAmount) * 100;
    const currentUser = JSON.parse(window.sessionStorage.getItem('userID'));
    let score = {
      email : currentUser.userEmail,
      myScore : result
    };
    scores.push(score);
    window.localStorage.setItem('scores', JSON.stringify(scores));
    window.sessionStorage.clear();
  }
}

export default Final;