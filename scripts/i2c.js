class I2c{
    i2cNames = [
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
        this.name = name;
        this.port = port;
        this.bus = bus;
    }
}
