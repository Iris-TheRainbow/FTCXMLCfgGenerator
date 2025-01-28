function test(){
    let hub1 = new Hub("chub");
    hub1.addMotor("GoBILDA5202", "frontleft", 0);
    hub1.addMotor("GoBILDA5202", "frontRight", 1);
    hub1.addServo("Servo", "claw", 0);
    hub1.addServo("Servo", "wrist", 1);
    hub1.addAnalog("axon", 0);
    hub1.addDigital("button", 0);
    let hub2 = new Hub("exhub");
    hub2.addMotor("GoBILDA5202", "slides", 0);
    for (var line of generate([hub1, new Hub("exhub")], [new Webcam("webcam", 0)])){
        console.log(line)
    }
    downloadBlob("robot.xml", generate([hub1, new Hub("exhub")], [new Webcam("webcam", 0)])); 
}