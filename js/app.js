/**
* Please ignore (or do not touch) all functions below in the code!
* - check()
* - isEqual()
*
* The tests are failing marked with red
* The successsful tests are marked with green (PASSED)
* Blue (VALUE IS CHANGED) means you've changed values which is not allowed!
*/


// 01
{
  var a = 3;
  var c = 3;
  
  check(a, 3);
  isEqual(c, a);
}
// 02
{
  var a = 5;
  var c = 7;
  var processed = a + 2;  // correct this!
  
  check(a, 5);
  check(c, 7);
  isEqual(c, processed);
}
// 03
{
  var a = 5;
  var processed = a * 5;  // correct this!
  
  check(a, 5);
  isEqual(25, processed);
}
// 04
{
  var a = "Hallo";
  var c = "Hallo class!";
  var processed = a + " class!";  // correct this!
  
  check(c, "Hallo class!");
  check(a, "Hallo");
  isEqual(c, processed);
}
// 05
{
  var a = "http://it-club-oberland.ch";
  var c = "You can access our page with (http://it-club-oberland.ch) every time you wish!";
  var processed = "You can access our page with (" + a + ") every time you wish!";   // correct this!
  
  check(c, "You can access our page with (http://it-club-oberland.ch) every time you wish!");
  check(a, "http://it-club-oberland.ch");
  isEqual(c, processed);
}
// 06
{
  var a = "Hallo";
  var b = "class"
  var c = "Hallo class!";
  var processed = a + " " + b + "!";  // correct this!
  
  check(a, "Hallo");
  check(b, "class");
  check(c, "Hallo class!");
  isEqual(c, processed);
}
// 07
{
  var a = "A";
  var c = "AC";
  var processed = a;  // correct this!
  
    // ????????
    
  check(a, "A");
  check(c, "AC");
  isEqual(false,  c > processed);
}
// 08
{
  var a = "oo";
  var b = "xo";
  var c = "oxo";
  var processed = "A" + a + b + c + "A"; // correct this

  check(a, "oo");
  check(b, "xo");
  check(c, "oxo");  
  isEqual(processed, "AooxooxoA");
}
// 09
{
  var a = "oooxoo";
  var c = "ooxooo";
    
    a=a.split('');
    a[2]='x';
    a[3]='o';
    a=a.join('');
  

  // change a, use the arrays' index access
  check(c, "ooxooo");
  isEqual(c, a);
}
// 10
{
  var c = "ABABABA";
    
    c = c.split('');
    c[2] = " ";
    c[3] = " ";
    c[4] = " ";
    c = c.join('');
    
  // change c, use the arrays' index access
  isEqual(c, "AB   BA");
}
// 11
{
  var c = "ABC";
  var processed = String.fromCharCode(65, 66, 67)  // correct this! check ascii table
  
  check(c, "ABC");
  isEqual(c, processed);
}
// 12
{
  var c = 1;
  var a = "1";
  var processed = +c + +a;  // correct this! check js Number Object
  
  check(c, 1);
  check(a, "1");
  isEqual(2, processed);
}
// 13
{
  var c = 1;
  var a = 1;
  var processed = '' + c + a;  // correct this!
  
  check(c, 1);
  check(a, 1);
  isEqual('11', processed);
}
// 14
{
  var c = 2;
  var a = 2;
  var processed = '' + a + c;  // correct this!

  check(c, 2);
  check(a, 2);
  isEqual('string', typeof processed);
}
// 15
{
  var processed = 'dogan';  // correct this!
  isEqual(5, processed.length);
}
// 16
{
  var processed = ' ab c    ';  // correct this! check the string's trim function
  processed = processed.trim();
  isEqual(4, processed.length);
}
// 17
{
  var processed = 'itclub';  // correct this! 
  processed = processed.toUpperCase();
  isEqual('ITCLUB', processed);
}
// 18
{
  var a = "it"
  var processed = a.concat("club");  // correct this!
  check(a, 'it');
  isEqual('itclub', processed);
}
// 19
{
  var c = "itclub";
  var b = "lub"; 
  b = "c" + b;
  console.log(b);  // to test it -> "club" or not
    //???????
      
  check(c, 'itclub');
  isEqual(2, c.indexOf(b));
}
// 20
{
  var c = "itclub";
  var b = "lub";
  var processed = c.substr(3,5); // correct this!
  
  check(c, 'itclub');
  isEqual(processed, b);
}
// 21
{
  var c = "itclub";
  var processed = c.split(""); // correct this! ?????
    processed = processed.join("-");
    
  check(c, 'itclub');
  isEqual(processed, "i-t-c-l-u-b");
}
// 22
{
  var c = "itclub";
  var processed = c.split(""); // correct this! use split function of string
  
  check(c, 'itclub');
  isEqual(['i','t','c','l','u','b'].join(""), processed.join(""));
}
// 23
{
  var c = ["it", "club", "schweiz", "KZO"]; // correct this!
  isEqual(4, c.length);
}
// 24
{
  var c = ["it", "club", "schweiz"]; // correct this!
  var processed = c; // correct this! check array functions
    c[0] = "ABC"
  isEqual(c[0], "ABC");
}
// 25
{
  var c = ["it", "club", "schweiz"]; // correct this!
    c.push("KZO");
    
    var tmp = c[1];
    c[1] = c[3];
    c[3] = tmp;     // I've replaced the club and KZO
    
  var processed = c; // correct this! check array functions
  isEqual(c.indexOf("club"), 3);
}
// 26
{
  var c = ["Ali", "Mustafa", "Mesut", "Mehmet", "Ferdi", "Cihad"]; 
  var processed = c.join("+"); // correct this! check array functions
    
  isEqual(processed, "Ali+Mustafa+Mesut+Mehmet+Ferdi+Cihad");
}
// 27
{
  var c = ["Ali", "Mustafa", "Mesut", "Mehmet", "Ferdi", "Cihad"]; 
    c.shift();
    c.shift();
    c.push("MUSTAFA");
    c.unshift("Ali");
    
  var processed = c; // correct this! check array functions
    
  isEqual(processed, "Ali,Mesut,Mehmet,Ferdi,Cihad,MUSTAFA");
}





// Now report everything!
report();