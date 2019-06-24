import { Entry } from './journal.js';
import { Journal } from './journal.js';
import './journal.js';
import './styles.css';

var myNumber = 5;
console.log(myNumber);

$(document).ready(function() {
  var myTestArray = [];
  console.log('jquery enabled');
  $('button.submit').click(function () {
    var myEntry = new Entry($('input').val(),$('textarea').val());
    myNumber = 10;
    console.log(myNumber);
    console.log(myEntry);
    myTestArray.push(myEntry);
    console.log(myTestArray);
  });//button event

});
