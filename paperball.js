class Paperball{

constructor(){
    var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
this.body=Bodies.circle(100,375,20,options);
this.radius=20;
World.add(world,this.body)
}
display(){
    push();
    translate (this.body.position.x,this.body.position.y);
ellipseMode(CENTER);
strokeWeight(3);
stroke("brown");
fill ("yellow");
ellipse(0,0,this.radius,this.radius);
pop ();










}





























}