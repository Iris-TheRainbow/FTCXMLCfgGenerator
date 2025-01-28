class Motor{
    motorNames = [
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
        this.name = name;
        this.port = port;
    }
}

