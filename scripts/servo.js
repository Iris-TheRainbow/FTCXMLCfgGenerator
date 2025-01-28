class Servo{
    Names = [
        "ContinuousRotationServo",
        "Servo",
        "RevSPARKMini",
        "RevBlinkinLedDriver"
    ]

    constructor(type, name, port){
        this.type = type;
        this.name = name;
        this.port = port;
    }
}

