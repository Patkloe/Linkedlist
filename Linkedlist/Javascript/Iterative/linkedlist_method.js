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
 add(element){ // method to add an element  at the end of the list
  var newnode = new Node(element);
  var current;
   if(this.head === null){
      this.head = newnode;
      console.log("head of list : " + " " + this.head.element);
   }  // end of if head === null
   else{
    current = this.head;
    while(current.next){
       current = current.next;
    }
    current.next = newnode;
    console.log("we added a new node :" + " " +current.next.element + " " + "after nod :" + " " +current.element);
   }
  this.size++;
  console.log("size of the linked list : " + " " + this.size);
 } // en method add
 addElementAt(element, index){
  if(index > 0 && index > this.size)
   return false;
  else{
   var newnode = new Node(element);
   var curr, prev;
    if( index == 0){
      newnode.next = this.head;
      this.head = newnode;
      console.log(" the new head of List : " + " " + this.head.element);
    }
    else{
     curr = this.head;
     var j = 0;
      while(j < index){
       j++;
       prev = curr;
       curr = curr.next;
      }
      newnode.next = curr;
      prev.next = newnode;
      console.log("node " + " " + newnode.element+ " " + "insert at :" + " " +j);
    }
   this.size++;
   console.log("new size after adding : " + " " + this.size);
  }
 }// end addElementAt(element, index)
remove(index){
 if(index > 0 && index > this.size)
  return -1;
 else{
  var curr, prev, j = 0;
  curr = this.head;
  prev = curr;
  if(index == 0){
   this.head = curr.next;
  }
  else{
   while(j < index){
     j++;
     prev = curr;
     curr = curr.next;
   }
     prev.next = curr.next;
  }
  this.size--;
  console.log("removed node : " + " " + curr.element);
  console.log("new size :" + " " + this.size);
  return curr.element;
 }
}// end remove(element)
}// end class linkedlist
var test = new Linkedlist();
test.add(1);
test.add(2);
test.add(4);
test.add(5);
test.add(7);
test.add(8);
test.addElementAt(3, 3);
test.addElementAt(6, 5);
test.remove(7);
