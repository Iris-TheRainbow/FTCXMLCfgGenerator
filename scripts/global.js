class MasterObj{
    activehub = null;
    constructor(){
        this.hubs = []
        this.webcams = []
    }
    addHub(hub){
        this.hubs.push(hub)
        this.activehub = this.hubs.indexOf(hub)
        update()
    }
    addWebcam(webcam){
        this.webcams.push(webcam)
        update()
    }
    getActiveHub(){
        return this.activehub
    }
    updateActiveHub(hub){
        this.hubs[this.activehub] = hub
    }
}
 
let master = null;

function update(){
    document.getElementById("xmlOut").innerText = generate(master.hubs, master.webcams)
}
function generateMaster(){
    master = new MasterObj()
}
function load(){
    if (master == null){
        generateMaster()
    }
    let hub1 = new Hub("chub");
    hub1.addMotor(motorType.GoBILDA5201, "frontleft", 0);
    hub1.addMotor(motorType.GoBILDA5202_3_4, "frontRight", 1);
    hub1.addServo(servoType.Servo, "claw", 0);
    hub1.addServo(servoType.Servo, "wrist", 1);
    hub1.addAnalog(analogType.AnalogDevice,"Axon", 0);
    hub1.addDigital(digitalType.DigitalDevice, "button", 0);
    let hub2 = new Hub("exhub");
    hub2.addMotor(motorType.GoBILDA5202_3_4, "slides", 0);

    master.addHub(hub1)
    master.addHub(hub2)
    master.addWebcam(new Webcam("webcam", 0))
}
function downloadXML(){
    downloadBlob("robot.xml", generate(master.hubs, master.webcams))
}