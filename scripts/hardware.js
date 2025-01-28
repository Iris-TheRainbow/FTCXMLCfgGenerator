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



class Analog{
    type = {
        OpticalDistanceSensor: "OpticalDistanceSensor",
        MRAnalogTouchSensor: "ModernRoboticsAnalogTouchSensor"
    }

    constructor(type, name, port){
        this.setType(type);
        this.name = name;
        this.port = port;
    }
    setType(type){
        if (Object.values(this.type).includes(type)){
            this.type = type
        }else{
            throw TypeError;
        }
    }
}

class Digital{
    names = [
        "RevTouchSensor",
        "Led",
        "DigitalDevice"
    ]

    constructor(type, name, port){
        this.setType(type);
        this.name = name;
        this.port = port;
    }
    setType(type){
        if (Object.values(this.type).includes(type)){
            this.type = type
        }else{
            throw TypeError;
        }
    }
}

class I2c{
    name = [
        "AdafruitBNO055IMU",
        "HuskyLens",
        "OctoQuadFTC",
        "KauaiLabsNavxMicro",
        "MaxSonarI2CXL",
        "ModernRoboticsI2cCompassSensor",
        "ModernRoboticsI2cRangeSensor",
        "REV_VL53L0X_RANGE_SENSOR",
        "RevExternalImu",
        "RevColorSensorV3",
        "QWIIC_LED_STICK",
        "SparkFunOTOS"
    ]
    
    constructor(type, name, port, bus){
        this.setType(type);
        this.name = name;
        this.port = port;
        this.bus = bus;
    }
    setType(type){
        if (Object.values(this.type).includes(type)){
            this.type = type
        }else{
            throw TypeError;
        }
    }
}
class Motor{
    type = {
        GoBILDA5201: "goBILDA5201SeriesMotor", 
        GoBILDA5202_3_4:"goBILDA5202SeriesMotor",
        Matrix12v: "Matrix12vMotor",
        NeveRest3_7V1: "NeveRest3.7v1Gearmotor",
        NeveRest20: "NeveRest20Gearmotor",
        NeveRest40: "NeveRest40Gearmotor",
        NeverRest60: "NeveRest60Gearmotor",
        REV20HDHex: "RevRobotics20HDHexMotor",
        REV40HDHex: "RevRobotics40HDHexMotor",
        REVCoreHex: "RevRoboticsCoreHexMotor",
        REVUltraplanetary:  "RevRoboticsUltraplanetaryHDHexMotor",
        Tetrix: "TetrixMotor",
        Generic: "Motor"
    }
    
    constructor(type, name, port){
        this.setType(type);
        this.name = name;
        this.port = port;
    }
    setType(type){
        if (Object.values(this.type).includes(type)){
            this.type = type
        }else{
            throw TypeError;
        }
    }
}

class Servo{
    typ = {
        CRServo: "ContinuousRotationServo",
        Servo: "Servo",
        SPARKMini: "RevSPARKMini",
        REVBlinkin: "RevBlinkinLedDriver"
    }

    constructor(type, name, port){
        this.setType(type);
        this.name = name;
        this.port = port;
    }
    setType(type){
        if (Object.values(this.type).includes(type)){
            this.type = type
        }else{
            throw TypeError;
        }
    }
}
