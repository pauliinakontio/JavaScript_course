//Jos javascriptissä virhe esim rivillä 2 loput rivit eivät myöskään näy;
document.write('Näin kirjotetaan JavaScriptillä');

alert('hello');
console.log('consolitesti toimii');
//console avataan shift+ctrl+i
console.log(4+6);
//console.log toimii hyvin esim testaamaan javascript toimintoja
console.error('error');
console.warn('alert');
console.log("%cHello World", "color:green;background:yellow");
/*Näin poistetaan
useampi
rivi
käytöstä*/
var myString="hello \"world's\"";
var myNumber=5;
var myBoolean=true;
//Primitiivisiä datatyyppejä ^ muut objecteja
//var tarkoittaa varaiblea joka siis säilöö ns dataa tulevaisuuteen gelpottamaan työtä
var MyNone; //palauttaa: undefined
/*typeof voidaan tarkastaa minkätyyppinen value on
eg. typeof myNumer tuottaa tuloksen "number"*/

/*var chooseQuestion = prompt('Do you want name or nickname');
var questionBase = 'what is your ';
//var questionName = 'name?'
var question = questionBase + chooseQuestion + '?';
var visitor = prompt(question);
alert('Welcome ' + visitor);*/
var a = 10;
var b = 3;
var numberExercise = a % b;
console.log(numberExercise);
//a % b tarkoittaa montako kertaa a:han mahtuu b ja siitä jäävä 'ylimääräinen'
//esim. 3 % 7 = 1 koska se jää ns ylimääräiseksi
/*var a = prompt('tell me a number');
var b = prompt('tell me another number');
a = Number(a); //Muuttaa string valuen number valueksi
b = Number(b);
var total = a+b;
alert('the sum of those two is ' + total);
var assignmentOperatora = 5;
var assignmentOperatorb = 4;
assignmentOperatorb += assignmentOperatora; //sama asia kuin b = b+a
console.log(assignmentOperatorb);*/
/* muita
    a -= b miinus
    a *= b kerto
    a /= b jako
    a %= b modulus */
/*var numberOne = prompt('Give us a number');
var numberTwo = prompt('Give us a second number');
numberOne = Number(numberOne);
numberTwo = Number(numberTwo);
var biggerOrSmaller = (numberOne >= numberTwo)? "Your first number which is " + numberOne + " is bigger or equal to the second": "Your second number is bigger than the first";
// ^^^ terinaryoperaattori
alert(biggerOrSmaller);*/
/*logical operaattoreita
&& ja eli kaikki statementit pitää paikkaansa tulee true
|| or eli riittää että yksi pitää paikkansa ja tulee true */

/*var myArray = ['Pauliina', 25, 'Helsinki'];
console.log(myArray);
myArray[2] = 'Punavuori';
console.log(myArray);
console.log(myArray[0]);*/
/*var myToDo = ['aamutoimet', 'kuntosali', 'opiskelu', 'meditointi', 'skincare'];
myToDo[(myToDo.length)] = 'nuku';
var progress = ['done', 'doing atm', 'to do'];

var questionTasks = prompt('Which task progress do you want to change 1-' + myToDo.length + ' ?');
var questionTasks1 = prompt('status 1 = done status 2 = doing atm status 3 = to do');
console.log('Today\'s task ' + myToDo[(questionTasks -1)] + ' status is = ' + progress[(questionTasks1 -1)]);
// vastaukseen otetaan objeksti myToDo lista ja listanumero tulee questiontasks vastuksesta -1
var animals = ['cat', 'dog', 'seal', 'pig', 'bird'];
var randomness = Math.floor(Math.random()*animals.length);
var animalRandom = animals[randomness];
console.log(animalRandom);
var message = prompt('Which index value is ' + animalRandom + ' ?');
var response = (message == randomness) ? 'Correct': 'Not correct';
alert(response);*

animals.sort();
animals.reverse()*/
//also animals.sort().reverse();
/*  animals.push(); adds item in the end of array
    animals.pop(); removes the last item of array
    animals.shift(); removes the first item
    animals.unshift(); adds an item as first item in array
    animals.splice(2,3); removes 3 items starting from the second item eg. seal pig and bird from animals list
    HOX! if we splice item that is not in the array it will remove item starting from the last!
    animals.fill('mouse', 3, 5); fills the array from the third item on with mouse until the fifth item;
    eg. animals.fill('mouse', 6, (animals.length -1));
*/
var newHolder = ['cat', 'dog', 'rabbit', 'bird'];
/*newHolder[0] = 'sheep'
newHolder.pop();
newHolder[10] = 'horse'
newHolder.fill('fish', 3, (newHolder.length -1)). reverse();
console.log(newHolder);*/

/*var questionHolder =  prompt('Check if the item is in the Array!');
var holderIndex = newHolder.indexOf(questionHolder);
var holderMessage = (holderIndex >= 0)? 'The item is in the array and its indexnumber is ' + holderIndex: 'Your item is not in the array';
alert(holderMessage);*/
//newHolder.includes('cat'); returns a boolean value!
//newHolder.slice(1,3); gives out the items from indexvalues 1 to 2 so in this case dog and rabbit
/*var arr = prompt('what do you want to remove?');
var finder = newHolder.indexOf(arr);
var remover = (finder > -1)? newHolder.splice(finder, 1): 'not found';
console.log(remover);

var multiArr = [['Johannes', 'Anne', 'Annika'],[0, 1, 14]];
console.log(multiArr);
var arrq = prompt("Who's info you want to know?");
var person = multiArr[0].indexOf(arrq);
console.log('You met ' + multiArr[0][person] + ' ' + multiArr[1][person] + ' days ago');

for(var x in newHolder)
{
    console.log(x);//gives the index value, a variable used within a loop
    console.log(newHolder[x]);//the item value
}*/
//array loop
/*var jukkis ={age:2, height: 1200, leafcolor: 'Dark green', pot: 'White ceramic'};
jukkis.height = 1300;
jukkis['age'] = 3;
//delete jukkis.pot poistaisi pot kohdan objectista!
console.log(jukkis);
var promp = prompt('What property you want to see?');
console.log(jukkis[promp]);*/

/*var oliivi = new Object();
oliivi.age=1;
oliivi.height=1000;
oliivi.leafcolor="Dark green";
oliivi.pot='Terracotta';
console.log(oliivi);*/
//eka literal metodi jota käytetään lähes aina ja toinen ei niin suosittu kun enemmön työtä

var car = {color: 'red', make: 'audi', doors: 3, model:'quatro'};
for(property in car){
    //console.log(property);
    console.log(property + ' ' + car[property]);
}

var bob = {
    age:30,
    hair:'brown',
    eyes:'blue',
    job :'developer'
}
var friends = {friend1: bob ,
                friend2:{age:25, hair:'blonde', eyes:'blue'}}
var friends1 = [bob,{age:25, haiir:'blonde', eyes:'blue'}]     
//kuinka saada consolessa fiendsin kautta bobin työ friends.friends1.job
//kuinka saada tuntemattoman ikä friends1:sta friends[1].age
/*var title = document.title;
var output = document.getElementById('output');
output.innerHTML='Javascript testing'
//voidaan laittaa myös document.getElementById('output').innerHTML='Javascript testing';
var a = document.getElementById('val');
a.value = document.getElementById('output').innerText;*/

var visitor = prompt('What is your name?');
var a = document.getElementById('output');
a.innerHTML = 'Welcome to this page ' + visitor; 

document.getElementById('a').innerHTML = 'Heelo World';


var input = document.getElementById('input');
/*var login = true;
var inputHolder = '';
input.innerHTML= login == true? 'true': 'false';
input.innerHTML = userOk;
login ? alert('true'): alert('false');*/
var userName = ['james', 'AnAnAs', 'harrystyles123'];
var userNameCheck = prompt("What's your username?");
//input.innerHTML = userName.indexOf(userNameCheck)> -1 ? 'access granted': 'access denied';

var outputCase = ''; 
if(userName.indexOf(userNameCheck)> -1){
    outputCase = 'welcome ' + userNameCheck;
    var age = prompt('what is your age?');
    outputCase += age >= 18 ? " and you're old enough" : " and you're too young";
} else {
    outputCase = 'sorry, access denied'
}
input.innerHTML = outputCase 
//jos outputCase += se ei korvaa aiempaa outputCasea vaan lisääntyy sen perään

var myTime = prompt('what time it is?');
var time = document.getElementById('time');

if (myTime> 8 && myTime < 16){time.innerHTML = 'time to work';
} else if(myTime > 11.5 && myTime < 12.5) {
    time.innerHTML= 'Time for lunch';
} else if (myTime > 17 && myTime < 17.5) {
    time.innerHTML = 'your free time';
} else if (myTime > 17.5 && myTime < 19){
    time.innerHTML = 'Dinner';
} else { time.innerHTML = 'Good night';}
/* switch statementillä sama
    switch (myTime) {
        case'8': casen jälkeen tulee se jos vastaus on myTimem kysymykseen 8
        time.innerHTML = 'time to work';
        break; tärkeä ettei looppaa koko rivin viimeseks!
        case 11.5:
        time.innerHTML = 'luch';
        break;
        default:
        time.innerHTML = 'nothing to to';
        etc.
    }