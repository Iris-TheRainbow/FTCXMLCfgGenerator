class Hub{
    constructor(type){
        this.type = type;
        this.motors = [];
        this.servos = [];
        this.i2c = [];
        this.digital = [];
        this.analog = [];
    }

    addChild(){
        if (this.type = "chub"){
            return;
        }
        if (this.type = "exhub"){
            return;
        }
        throw TypeError;
    }

    addMotor(type, name, port){
        this.motors.push(new Motor(type, name, port));
    }

    addServo(type, name, port){
        this.servos.push(new Servo(type, name, port));
    }   

    addI2c(type, name, port, bus){
        this.i2c.push(new I2c(type, name, port, bus));
    }

    addDigital(name, port){
        this.digital.push(new Digital(name, port));
    }

    addAnalog(name, port){
        this.analog.push(new Analog(name, port));
    }
}

class Webcam{
    constructor(name, serial){
        this.name = name;
        this.serial = serial;
    }
}
