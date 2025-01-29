const hubType = {
    chub: "ControlHub",
    exhub: "ExpansionHub",
    shub: "ServoHub"
}

class Hub{
    constructor(type){
        this.setType(type);
        this.childHubs = [];
        this.motors = [];
        this.servos = [];
        this.i2c = [];
        this.digital = [];
        this.analog = [];
    }

    setType(type){
        if (Object.values(hubType).includes(type)){
            this.type = type
        }else{
            throw TypeError;
        }
    }

    addChild(type){
        if (this.type != hubType.shub){
            this.childHubs.push(new Hub(type));
            return
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

    addDigital(type, name, port){
        this.digital.push(new Digital(type, name, port));
    }

    addAnalog(type, name, port){
        this.analog.push(new Analog(type, name, port));
    }
}

class Webcam{
    constructor(name, serial){
        this.name = name;
        this.serial = serial;
    }
}


const analogType = {
    OpticalDistanceSensor: "OpticalDistanceSensor",
    MRAnalogTouchSensor: "ModernRoboticsAnalogTouchSensor",
    AnalogDevice: "AnalogDevice"
}

class Analog{
    constructor(type, name, port){
        this.setType(type);
        this.name = name;
        this.port = port;
    }
    setType(type){
        if (Object.values(analogType).includes(type)){
            this.type = type
        }else{
            throw TypeError;
        }
    }
    setType(type){
        this.type = type
    }
}

const digitalType = {
    REVTouch: "RevTouchSensor",
    LED: "Led",
    DigitalDevice: "DigitalDevice"
}

class Digital{
    constructor(type, name, port){
        this.setType(type);
        this.name = name;
        this.port = port;
    }
    setType(type){
        if (Object.values(digitalType).includes(type)){
            this.type = type
        }else{
            throw TypeError;
        }
    }
}

const i2cType = {
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
class I2c{
    constructor(type, name, port, bus){
        this.setType(type);
        this.name = name;
        this.port = port;
        this.bus = bus;
    }
    setType(type){
        if (Object.values(i2cType).includes(type)){
            this.type = type
        }else{
            throw TypeError;
        }
    }
}

motorType = {
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

class Motor{
    constructor(type, name, port){
        this.setType(type);
        this.name = name;
        this.port = port;
    }
    setType(type){
        if (Object.values(motorType).includes(type)){
            this.type = type
        }else{
            throw TypeError;
        }
    }
}

const servoType = {
    CRServo: "ContinuousRotationServo",
    Servo: "Servo",
    SPARKMini: "RevSPARKMini",
    REVBlinkin: "RevBlinkinLedDriver"
}

class Servo{
    constructor(type, name, port){
        this.setType(type);
        this.name = name;
        this.port = port;
    }
    setType(type){
        if (Object.values(servoType).includes(type)){
            this.type = type
        }else{
            throw TypeError;
        }
    }
}
