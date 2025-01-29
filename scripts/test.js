function test(){
    let hub1 = new Hub("chub");
    hub1.addMotor(motorType.GoBILDA5201, "frontleft", 0);
    hub1.addMotor(motorType.GoBILDA5202_3_4, "frontRight", 1);
    hub1.addServo(servoType.Servo, "claw", 0);
    hub1.addServo(servoType.Servo, "wrist", 1);
    hub1.addAnalog(analogType.AnalogDevice,"Axon", 0);
    hub1.addDigital(digitalType.DigitalDevice, "button", 0);
    let hub2 = new Hub("exhub");
    hub2.addMotor(motorType.GoBILDA5202_3_4, "slides", 0);
    let out = generate([hub1, new Hub("exhub")], [new Webcam("webcam", 0)])
    let download = ""
    for (var line of out){
        console.log(line)
        download += line + "\n"
    }
    downloadBlob("robot.xml", download); 
}