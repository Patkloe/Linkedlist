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
