
/** Iterative **/
class Node{
 constructor(element){
  this.element = element;
  this.next = null;
 }
}
class Linkedlist{
 constructor(){
  this.head = null;
  this.size = 0;
 }
  add(element){
   var newnode = new Node(element);
   var navigate;
   if(this.head === null){
      this.head = newnode;
      console.log("Head of the list : " + " " + this.head.element);
   }
   else{
    navigate = this.head;
    while(navigate.next){
          navigate = navigate.next;
    }
          navigate.next = newnode;
          console.log("new node added : " + " " + navigate.next.element + "previous :" + " " + navigate.element);
   }
   this.size++;
   console.log("Number of elements : " + " " +this.size);
  }
}// end class Linkedlist
var test = new Linkedlist();
test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);
// to investigate
class Node{
 constructor(element){
  this.element = element;
  this.next = null;
 }
}
class Linkedlist{
 constructor(){
  this.head = null;
  //this.size = 0;
 }
  add(element){
   var recup = [];
   var newnode = new Node(element);
   var navigate;
   if(this.head === null){
      this.head = newnode;
      console.log("Head of the list : " + " " + this.head.element);
      recup.push(this.head.element);
   }
   else{
    navigate = this.head;
    while(navigate.next){
          navigate = navigate.next;
    }
          navigate.next = newnode;
          console.log("new node added : " + " " + navigate.next.element + "previous :" + " " + navigate.element);
          recup.push(navigate.next.element);
   }
   var list = navigate;
   //console.log("liste et suivant :" + " "+ navigate.element + " " + navigate.next.element);
   console.log(list);
   console.log(recup);
  }// end add
}// end class Linkedlist
var test = new Linkedlist();
var tab = [1,2,5,4,6];
for(var i = 0; i < tab[i]; i++)
      test.add(tab[i]);
