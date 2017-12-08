class Car{
    constructor(make,year,model){
        this.wheels = 4
        this.lights = "off"
        this.signal = "off"
        this.speed = 0
        this.make = make
        this.year = year
        this.model = model
    }
    lightsOn(){
        this.lights= "on"
    }
    lightsOff(){
        this.lights = "off"
    }
    signalLeft(){
        this.signal = "left"
    }
    signalRight(){
        this.signal = "right"
    }
    signalOff(){
        this.signal = "off"
    }
};

let myCar = new Car();

class Tesla extends Car{
    constructor(make,year,model){
        super()
        this.make = make
        this.year = year
        this.model = model
    }
    accelerate(){
        if(this.speed >= 0){
            this.speed += 10
        }

    }

brake(){
    if (this.speed >0){
        this.speed-=7
    }
}
};
let myTesla =  new Tesla();



     class Tata extends Car{
         constructor(){
             super()

         }
         accelerate(){
             if(this.speed >= 0){
                 this.speed += 2
             }
         }

         brake(){
         if (this.speed >0){
             this.speed-=1.25
            }
        }
     }

     let myTata = new Tata ();

     class Toyota extends Car{
         constructor(){
             super()
         }
         accelerate(){
             if(this.speed >= 0){
                 this.speed += 7
             }
         }

         brake(){
         if (this.speed >0){
             this.speed-=5
            }
        }
     }
     let myToyota = new Toyota ()
     let carInfo=[myTesla, myTata, myToyota]





//class Car {
    //constructor(year, make, model) {
    //    this.year = year,
    //}
//}

Tesla1 = new Tesla ("Tesla",2017, "model s");
Tesla2= new Tesla ("Tesla",2016, "model e")

var collection= [Tesla1, Tesla2]
