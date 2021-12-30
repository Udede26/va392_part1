
let p = 50

  
class zigzag{
    constructor(r,x,y,rot){
        this.r = r
        this.x = x
        this.y = y 
        this.rot = rot 

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
    let mycanvas = createCanvas(505,510,SVG)
    background(0)
    angleMode(DEGREES)
    noLoop()
}
class bug{
    constructor(t,x,y,rot)
    {
        this.t = t 
        this.x = x 
        this.y = y 
        this.rot = rot 
    }

    render(){
        push()
            translate(this.x,this.y)
            rotate(this.rot)
            line(0,-y0,x1,-y1)
            line(x3,0,x2,-y2)
            line(x3,y3,x7,y7)
            line(x7,y7,x6,-y6)
            line(x6,-y6,x5,-y5)
            line(x5,-y5,x4,-y4)

            line(0,-y0,-x1,-y1)
            line(-x3,0,-x2,-y2)
            line(-x3,y3,-x7,y7)
            line(-x7,y7,-x6,-y6)
            line(-x6,-y6,-x5,-y5)
            line(-x5,-y5,-x4,-y4)
        pop()
    }
}

class hex {
    constructor(t,x,y){
        this.t = t
        this.x = x
        this.y = y 
    }
    render(){
        let mybug = new bug(this.t,this.x,this.y,45)

        mybug.render()
        
        let mybug2 = new bug(this.t,this.x,this.y-t*27.45,135)
        mybug2.render()

        let mybug3 = new bug(this.t,this.x+27.45*t ,this.y-t*27.45,225)

        mybug3.render()

        let mybug4 = new bug(this.t,this.x+27.45*t ,this.y,315)

        mybug4.render()

    }
}

function draw() {
    // t is the parameter 
    t= 1
    r= sin(75)*t/sin(15)
    q = sin(22.5) * r*(1+(cos(45)/cos(15)))
    s= 2 *r* (1 + (cos(45)/cos(15))) - 2 *q 
    w = s*cos(45)*tan(22.5)
    x0 = 0
    y0 = t
    p  = sin(45)*(1.5*(2*r+2*(r*cos(45)/cos(15)))-t)/sin(75)


    x1 = p*cos(30)
    y1 = y0 + p*sin(30)
    x2 = 0 
    y2 = t + r *(cos(45)/cos(15))/cos(60)
    x3 = r
    y3 = 0 
    x4 = w/(sin(22.5)/cos(22.5))
    y4 = y2 + 2*q + w
    x5 = 0 
    y5 = y2 + 2*q 
    x6 = r + r*cos(45)/cos(15)
    y6 = y2 + q
    x7 = x6 
    y7 = 0 
    stroke(255)
    

    for(let x= 0; x <1000;x+=36.7*t){
        for(let y = -6; y < 1000; y+=36.7*t){
            myhex = new hex(t,0+x,0+y)
            myhex.render()
        }
    }
}
