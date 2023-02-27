function bigger(){
     //alert("Hello, world!") //used during the alert box when click bigger
     document.getElementById("Text").style.fontSize='4em';
}

function textChange() {
    //checks to see if the fancy button was clicked
    //if so then it will bold the words in the text box and underline them and change to blue color
    if(document.getElementById('fancyRadioButton').checked == true){
        document.getElementById("Text").style.fontWeight= "bold";
        document.getElementById("Text").style.color= "blue";
        document.getElementById("Text").style.textDecoration= "underline";
         alert("Styles were added to the text.")
    }

    //checks to see if boring button is clicked
    //if so then all fonts and changes will go back to normal
    if(document.getElementById('boringRadioButton').checked == true){
        document.getElementById("Text").style.fontWeight= "normal";
        document.getElementById("Text").style.color="black";
        document.getElementById("Text").style.fontSize='16px';
        document.getElementById("Text").style.textDecoration= "none";
        alert("Styles were removed from the text.")
    }
}

function mooButton(){
    var str = document.getElementById("Text");
    str = str.toUpperCase();
    var parts= str.split(".");
    str= parts.join("-Moo");
    //document.getElementById("text").value= str;
    alert("The above text has changes. It will now have a moo at the end of words.")
}
