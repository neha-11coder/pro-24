class Ground{

constructor(){
    var options={
isStatic:true,


    }

this.body=Bodies.rectangle(700,390,1400,10,options);
this.width=800;
this.height=20;
World.add(world,this.body);
}
display(){

rectMode(CENTER);
fill("blue");
rect(700,390,1400,10);







}




















}