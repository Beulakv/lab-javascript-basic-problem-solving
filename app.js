// Important Note - No Built-in functions to be used
// Progression 1: Names and Input
// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var name1="Beula";
console.log(name1);
var name2="Varghese";
console.log(name2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
console.log(name1.length);
console.log(name2.length);
var difference=name1.length-name2.length;
if(name1.length>name2.length)
{
console.log("The driver has the longest name, it has"+difference+"more characters");
}
else if(name1.length<name2.length)
{
    console.log("It seems that the navigator has the longest name, it has"+difference+ "characters.");
}
else if(difference==0)
{
    console.log("Wow, you both have equally long names");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
let vowels = ["a", "e", "i", "o", "u"];
var count;
var count = [];
for (let i = 0; i < 6; i++) {
    count = 0;
    for (let j = 0; j < name1.length; j++)
        if (name2[j] == vowels[i])
            count++;
    count[i] = count;
    console.log(vowels[i] + " " + "found" + count + " " + "times")

}
for (let i = 0; i < 6; i++) {
    count = 0;
    for (let j = 0; j < name2.length; j++)
        if (name1[j] == vowels[i])
            count++;
    count[i] = count;
    console.log(vowels[i] + " " + "found" + count + " " + "times")

}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var namee2 = "sisily";
var length = name2.length;
var position = 0,
    capsCount = 0,
    smallCount = 0;
name2 = name2.trim();
console.log(name2);
while (length >= 0) {
    if (name2.charCodeAt(position) > 64 && name2.charCodeAt(position) <= 90) {
        console.log(name2[position]);
        capsCount++;
    } else {
        smallCount++;
    }
    length--;
    position++;
}
console.log("Number of Upper Case Letters are " + capsCount);
console.log("Number of Lower Case Letters are " + smallCount);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
var driver=name1.toUpperCase();
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
var arr=driver.split("");
console.log(arr+" ");
for(let i=name2.length;i>=0;i--)
{
    console.log(name2[i]);
}
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
var a=name1.localeCompare(name2);
console.log(a);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if(a==0)
console.log("What?! You both have the same name?");
else if(a>0)
console.log("Yo, the navigator goes first definitely.");
else if(a<0)
console.log("The driver's name goes first.");

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
var str=new String("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");
//console.log(str.length);
str = str.replace(/(^\s*)|(\s*$)/gi,"");  //remove end and start spaces
str = str.replace(/[ ]{2,}/gi," "); //multiple spaces into a single space
str = str.replace(/\n /,"\n"); //exclude a new line with a start spacing.

console.log(str.split(' ').length);

var subcount=(str.match(/et/g) || []).length;
console.log(subcount);
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
var phraseToCheck="Beula, Heala";
    phraseToCheck=phraseToCheck.replace(/ +/g,"");
    var flag=false;
    for(let i=0;i<phraseToCheck.length/2;i++)
    {
        if(phraseToCheck[i] !=phraseToCheck[phraseToCheck.length-1-i])
        {
            flag= false;
        }
        else
        {
            flag=true;
        }
           
    }
   if(flag==true)
   {
       console.log("palindrome");
   }
   else
   {
       console.log("Not palindrome");
   }
   

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
