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
    type = {
        REVTouch: "RevTouchSensor",
        LED: "Led",
        DigitalDevice: "DigitalDevice"
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

class I2c{
    type = {
        AdafruitBNO055: "AdafruitBNO055IMU",
        HuskyLens: "HuskyLens",
        OctoQuad: "OctoQuadFTC",
        NavXMicro: "KauaiLabsNavxMicro",
        MaxSonar: "MaxSonarI2CXL",
        MRCompas: "ModernRoboticsI2cCompassSensor",
        MRRangeSensor: "ModernRoboticsI2cRangeSensor",
        REV2MDistanceSensor: "REV_VL53L0X_RANGE_SENSOR",
        REV9AxisIMU: "RevExternalImu",
        REVColorSensorv3: "RevColorSensorV3",
        SparkFunLEDStick: "QWIIC_LED_STICK",
        SparkFunOTOS: "SparkFunOTOS"
    }
    
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
    type = {
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
