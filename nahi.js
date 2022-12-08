QUESTION 1

ANS:-- console.log('a')-- a (because function log directly store a as a string)

            console.log('b')-- b (because function log directly store a as a string)

         console.log("c")-- output is c after 1 sec or 1000milisec as it use function setTimeout.

             console.log('d')-- d (because function log directly store a as a string)    



QUESTION 2

ANS:-- console.log('a')-- a (because function log directly store a as a string)

            console.log('b')-- b (because function log directly store a as a string)

         console.log("c")-- output is c after 1 sec or 1000milisec as it use function setTimeout.

   console.log("d")-- output is d just after code run  as it use function setTimeout with 0 which has no value.

             console.log('d')-- d (because function log directly store a as a stirng)    



QUESTION 3

ANS:--

1 - BLOCK SCOPE VARIABLE (let and const) they prevent us from issues related with javascript hoisting as they are not stored in global space.

2 - STRING INTERPOLATION -( ` , ${ }`) it helps us in knowing what the output is going to be.

3-ARROW FUNCTION -[()=>{} ] it help in avoiding with the issues related with "this" key word.

4- SPRED OPERATOR -we can merge two array using it.

5- DESTRUCTORING -we can get any value inside an object or an array using it.

6- OBJECT.ASSIGN()- helps us in creating the shallow close if any object or merging many object into one.

7-MULTI LINE STRING - we can create multi line string using back ticks.

8- PROMISES-  we can use promise with the arrow function.

9-CLASSES- make simpler to create object , function and we can use inheritance also .

10-MODULES- we can use the "import" or "export" statement in a module to import or export variables, functions, classes or any other component from/to different files and modules.



QUESTION 4

ANS:-Arrow functions don't have their own bindings to this,arguments, or super , and should not be used as methods and cannot be used as constructor. Calling them with new throws a error. They also don't have access to the new taeget keyword.



const name = [

    'Kanhaiya',

    'Rakesh',

    'Deepak',

    'Lokesh'

  ];

  

  console.log(name.map(name => name.length));