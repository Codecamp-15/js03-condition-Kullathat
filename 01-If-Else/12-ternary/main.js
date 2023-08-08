let Score = prompt("Score");
let message = Score > 80? 'A'
: Score < 79 && Score >=70? 'B'
: Score < 69 && Score >= 60? 'C'
: Score < 59 && Score >= 50? 'D'
: 'F';
alert(message);