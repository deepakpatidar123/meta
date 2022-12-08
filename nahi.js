use of this

this.garage = {



 table: "gae table",



 cleanTable(){

  console.log(`cleaning ${this.table}`)

 }

}

//console.log(this.garage.table);



let room ={

 table: 'abc',

 cleanTable(){

  console.log(`cleaning ${this.table}`)

 }

}

console.log(room.table);

room.cleanTable();

this.garage.cleanTable()



FAT ARROW FUNCTION

class Student {

  static count =0;

  constructor(name,age,phonenumber,boardMarks) {

    this.name=name;

    this.age=age;

    this.phonenumber=phonenumber;

    this.boardMarks=boardMarks;

    Student.count++;

  }

  

 EligibiltyForPlacement  = (boardMarks) => {

  let result = this.boardMarks>40 ? this.name+' is eligible for placement':this.name+' is not eligible for placement';

  console.log(result)

  }



} ;

let obj1= new Student('Rakesh', 17, 3488273, 91);

let obj2= new Student('Lokesh', 16, 3488273, 90);

let obj3= new Student('Depesh', 18, 3488273, 76);

let obj4= new Student('Mahesh', 27, 3488273, 31);

let obj5= new Student('Somesh', 19, 3488273, 40);



//obj5.EligiblityOfStudents()

//obj5.NoOfStudents()

obj1.EligibiltyForPlacement();

obj2.EligibiltyForPlacement();

obj3.EligibiltyForPlacement();

obj4.EligibiltyForPlacement();

obj5.EligibiltyForPlacement();