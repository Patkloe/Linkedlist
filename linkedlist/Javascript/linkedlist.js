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
 var current;
 if(this.head === null){
    this.head = newnode;
    console.log("head of the list: " + " " + this.head.element);
 }
 else{
    current = this.head;
    while(current.next){
     current = current.next;
    }
     current.next = newnode;
     console.log("new list element :" + " " + newnode.element);
 }
    this.size++;
}
} // end class linkedlist
var test = new Linkedlist();
test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);
