// create your classes here
class Dot{
    def(){
        console.log(" x0,y0 ");

    }
}
class Line extends Dot{
    def(){
        super.def();
        console.log(" x1,y1 ");
    }
}
class Plane extends Line{
    def(){
        super.def();
        console.log(" x2,y2 ");
    }
}
var linea1= new Line();
var plano1= new Plane();
linea1.def();
plano1.def();
