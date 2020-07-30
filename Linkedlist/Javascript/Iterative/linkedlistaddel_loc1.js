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
     console.log("this is the head of the list : " + " " + this.head.element);
  }
   else{
       current = this.head;
       while(current.next){
       current = current.next;
       }
       current.next = newnode;
       console.log(" new element in the list : " + " " + current.next.element + " " + "previous : " + " " + current.element);
   }
   this.size++;
   console.log(" number of elements in the list :" + " " +this.size);   
 }// end add method
 addElementAt(element,index){
  if(index > 0 && index > this.size)
   return false;
  else{
    var curr, prev;
    var newnode = new Node(element);
    if( index == 0){
      newnode.next = this.head;
      this.head = newnode;
      console.log(" Is the new head of the list :" + " " + this.head.element);
      this.size++;
      console.log(" New size of the list : " + " " + this.size);
    }
    else{
    var i = 0;
     curr = this.head;
     while(i < index){
       i++;
       prev = curr;
       curr = curr.next;
     }
       newnode.next = curr;
       prev.next = newnode;
       console.log("element add to index : " +  " " + i + " val : " + " " + newnode.element + " previous : " + " " + prev.element);
       this.size++;
    }
  }
 }
} //end class linkedlist
var test = new Linkedlist();
test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);
test.addElementAt(8,0);
test.addElementAt(7,4);

