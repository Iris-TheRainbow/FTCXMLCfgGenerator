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
const NameError =  new Error("This DeviceType does not contain a device with that name");


class Analog{
    names = [
        "OpticalDistanceSensor",
        "ModernRoboticsAnalogTouchSensor"
    ]
    constructor(name, port){
        this.setName(name);
        this.port = port;
    }

    setName(name){
        if (name in this.names){
            this.name = name
        }else{
            throw NameError;
        }
    }
}

class Digital{
    names = [
        "RevTouchSensor",
        "Led",
        "DigitalDevice"
    ]

    constructor(name, port){
        this.setName(name);
        this.port = port;
    }

    setName(name){
        if (name in this.names){
            this.name = name
        }else{
            throw NameError;
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
        this.type = type;
        this.setName(name);
        this.port = port;
        this.bus = bus;
    }
    
    setName(name){
        if (name in this.names){
            this.name = name
        }else{
            throw NameError;
        }
    }
}
class Motor{
    names = [
        "goBILDA5201SeriesMotor", 
        "goBILDA5202SeriesMotor",
        "Matrix12vMotor",
        "NeveRest3.7v1Gearmotor",
        "NeveRest20Gearmotor",
        "NeveRest40Gearmotor",
        "NeveRest60Gearmotor",
        "NeveRest60Gearmotor",
        "RevRobotics20HDHexMotor",
        "RevRobotics40HDHexMotor",
        "RevRoboticsCoreHexMotor",
        "RevRoboticsUltraplanetaryHDHexMotor",
        "TetrixMotor",
        "Motor"
    ]
    
    constructor(type, name, port){
        this.type = type;
        this.setName(name);
        this.port = port;
    }
    setName(name){
        if (name in this.names){
            this.name = name
        }else{
            throw NameError;
        }
    }
}

class Servo{
    Names = [
        "ContinuousRotationServo",
        "Servo",
        "RevSPARKMini",
        "RevBlinkinLedDriver"
    ]

    constructor(type, name, port){
        this.type = type;
        this.setName(name);
        this.port = port;
    }
    setName(name){
        if (name in this.names){
            this.name = name
        }else{
            throw NameError;
        }
    }
}
