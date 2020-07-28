class Node{
 constructor(element){
  this.element = element;
  this.next = null;
 }
}

class Linkedlist{
 constructor(){
 this.head = null;
 this'size = 0;
 }
 add(element){
  var node = new node(element);
  var current;
  if(this.head === null)
     this.head = node;
  else{
     current = this.head;
     while (current.next){
     current = current.next;
     }
     current.next = node;
  }
  this.size++;
 }
}