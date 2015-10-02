 function setOptions(chosen) {
var selbox = document.myform.opttwo;
 
selbox.options.length = 0;
if (chosen == " ") {
  selbox.options[selbox.options.length] = new Option('Select a topic or type in custom question','Type a question');
 
}
if (chosen == "1") {
  selbox.options[selbox.options.length] = new
Option('first choice - option one','Do you like Waffles?');
  selbox.options[selbox.options.length] = new
Option('first choice - option two','Do you like pancakes');
}
if (chosen == "2") {
  selbox.options[selbox.options.length] = new
Option('second choice - option one','What is The Rocks real name?');
  selbox.options[selbox.options.length] = new
Option('second choice - option two','Put that cookie down?');
}
if (chosen == "3") {
  selbox.options[selbox.options.length] = new
Option('third choice - option one','Click Click boom');
  selbox.options[selbox.options.length] = new
Option('third choice - option two','Booom');
}

}

 var questionA = new Array ("How old are you","What is your name?");
 function setText() {
 document.forms['form'].elements['myText'].value=(document.myform.opttwo.options[document.myform.opttwo.selectedIndex].value);

  if (document.forms['form'].elements['myText'].value=='Type a question'){
   document.forms['form'].elements['text2'].value='Type a wrong answer';
   document.forms['form'].elements['text3'].value='Type the right answerer ';
 }  
 
 if (document.forms['form'].elements['myText'].value=='Do you like Waffles?'){
   document.forms['form'].elements['text2'].value='yes';
   document.forms['form'].elements['text3'].value='no';
 }

 if (document.forms['form'].elements['myText'].value=='Do you like pancakes'){
   document.forms['form'].elements['text2'].value='no I like burbers';
   document.forms['form'].elements['text3'].value='maybe';
 }

 if (document.forms['form'].elements['myText'].value=='What is The Rocks real name?'){
   document.forms['form'].elements['text2'].value='Panda';
   document.forms['form'].elements['text3'].value='The Rock Johnson';
 }

 if (document.forms['form'].elements['myText'].value=='Put that cookie down?'){
   document.forms['form'].elements['text2'].value='yes?';
   document.forms['form'].elements['text3'].value='NO YOU PUT THAT COOKIE DOWN NOW';
 }   
 
 }