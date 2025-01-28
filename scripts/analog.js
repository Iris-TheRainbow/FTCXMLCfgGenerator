class Analog{
    analogNames = [
        "OpticalDistanceSensor",
        "ModernRoboticsAnalogTouchSensor"
    ]

    constructor(name, port){
        this.name = name;
        this.port = port;
    }
}