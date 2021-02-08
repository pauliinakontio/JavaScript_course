
var kasipallo = document.getElementById('kasipallo');
answer = 'Sorry, there is a problem';

var kasiNro = Math.floor(Math.random()*5);
switch(kasiNro) {
    case 0:
        answer = 'Believe in yourself';
        break;
    case 1:
        answer = 'You should think twice';
        break;
    case 2:
        answer = 'Remember to say no';
        break;
    case 3:
        answer = 'Now is the time';
        break;
    case 4:   
    answer = 'ask a friend';
    break;     
}
kasipallo.innerHTML = answer;
