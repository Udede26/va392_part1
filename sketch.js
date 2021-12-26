
let p = 50

  
class zigzag{
    constructor(r,x,y){
        this.r = r
        this.x = x
        this.y = y 

    }

    render(){
        push()
        translate(this.x,this.y)

            line(0,0,this.r,sin(22.5)*this.r)
            line(this.r,sin(22.5)*this.r,this.r+this.r/1.375,(this.r/1.375)*sin(45)/-cos(45)+sin(22.5)*this.r)
            line(0,0,-this.r,sin(22.5)*this.r)
            line(-this.r,sin(22.5)*this.r,-(this.r+r/1.375),(this.r/1.375)*sin(45)/-cos(45)+sin(22.5)*this.r)
        pop()
    }
}

function setup() {
   
    let mycanvas = createCanvas(500,500,SVG)
    background(0)
    angleMode(DEGREES)
    noLoop()
}


function draw() {
    r= 82.5
    let myzigzag = new zigzag(90)
    stroke(255)
    push ()
        translate(width/2,height/2)
        polygon(0, 52, 150, 8);
        angleMode(DEGREES)

        myzigzag.render()
        push()
            rotate (90)
            translate((90*cos(22.5)/cos(22.5))*cos(45),  -(90*cos(22.5)/cos(22.5))*sin(45))         
            myzigzag.render()
            push()
                rotate (90)
                translate((90*cos(22.5)/cos(22.5))*cos(45),  -(90*cos(22.5)/cos(22.5))*sin(45))         
                 myzigzag.render()
                push()
                    rotate (90)
                    translate((90*cos(22.5)/cos(22.5))*cos(45),  -(90*cos(22.5)/cos(22.5))*sin(45))         
                    myzigzag.render()
                pop()
            pop()
        pop()
    pop ()
    
}

function polygon(x, y, radius, npoints) {
    angleMode(RADIANS)

    let angle = TWO_PI / npoints;
    stroke(25,54,255)
    fill (0)
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }