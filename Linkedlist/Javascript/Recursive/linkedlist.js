
/** Recursive **/
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
    else{ // recursive function
       this.addElement(this.head,newnode);
    }
    this.size++;
    console.log("Number of elements in the list : " + " " + this.size);
   }// end add
  addElement(node,newnode){
     console.log("here to insert the new element");
    if(node.next === null){
       node.next = newnode;
       console.log("new node added :" + " " + node.next.element + " previous : " + " " + node.element);
     }
    else{
      var current = node.next;
      //var nouv = newnode;
      this.addElement(current,newnode);
    }
  }
}// end class Linkedlist
var test = new Linkedlist();
test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);