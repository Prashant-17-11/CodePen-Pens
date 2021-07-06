var char_array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
var morse_char = ['._','_...','_._.','-..','.','.._.','__.','....','..','.___','_._','._..','__','_.','___','.__.','__._','._.','...','_','.._','..._','.__','_.._','_.__','__..','    '];

function encode()
{
    let message = (document.getElementById("text").value).trim();   //trim removes unncessary spaces in beginig and end
    message = message.toUpperCase();    //converting all the characters to upper case
    let message_length = message.length;
    let morse_message = "";
    var char_position = 0;
    while(char_position < message_length)
    {
        var char = message.charAt(char_position);
        var char_morse = char_array.indexOf(char);
        morse_message = morse_message + morse_char[char_morse]+"  ";
        char_position++;
    }
    document.getElementById("Morse").innerHTML = morse_message;
}
