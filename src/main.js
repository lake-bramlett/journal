import { Journal } from './journal.js';
import './styles.css';

$(document).ready(function() {
  console.log('jquery enabled');
  $('button').click(function () {
    var journalBody = $('textarea').val();
    console.log(journalBody);
  });//button event
});
