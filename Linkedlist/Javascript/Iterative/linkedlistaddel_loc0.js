class Noeud{
 constructor(data){
  this.data = data;
  this.next = null;
 }
}
class Listelink{
 constructor(){
  this.root = null;
 }
 addnode(data){
  var newmaillon = new Noeud(data);
  var curr;
  if(this.root === null){
     this.root = newmaillon;
 console.log("list root : " + " " + " from newmaillon data" + " " +newmaillon.data + " " + "from this.root " + " " + this.root.data);
  }
  else{ //we navigate on the list to add the node
     curr = this.root;
     while(curr.next){
           curr = curr.next;
     }
           curr.next = newmaillon;
 console.log("list root : " + " " + " from newmaillon data" + " " +newmaillon.data + " " + "parent " + " " + curr.data);    
  }
 }
}//  fin class addnode
var tab = [1,2,3,4,5,6,7,8,9];
var test = new Listelink();
    console.log("List linked built : ");
 for(var i = 0; i < tab.length; i++)
    test.addnode(tab[i]);
