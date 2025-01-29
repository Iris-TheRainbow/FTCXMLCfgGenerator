class StateObj {
    activeHubIndex = null;
    activeHub = null;
    constructor() {
        this.hubs = []
        this.webcams = []
    }
    addHub(hub) {
        this.hubs.push(hub)
        this.setActiveHub(this.hubs.indexOf(hub))
        update()
    }
    addWebcam(webcam) {
        this.webcams.push(webcam)
        update()
    }
    getActiveHubIndex() {
        update()
        return this.activeHubIndex
    }
    getActiveHub() {
        return this.activeHub
    }
    setActiveHub(index) {
        this.activeHubIndex = index
        this.activeHub = this.hubs[index]
        document.getElementById("activeHub").innerText = this.activeHub.type
        console.log(this.activeHub)
        console.log(this.activeHubIndex)
        update()
    }
    updateActiveHub(hub) {
        this.hubs[this.activeHubIndex] = hub
        update()

    }
}

let state = null;

function update() {
    generateHardwareList("motor", state.getActiveHub().motors, "editActiveMotor")
    generateHardwareList("servo", state.getActiveHub().servos, "editActiveServo")
    generateHardwareList("i2c", state.getActiveHub().i2c, "editActiveI2C")
    generateHardwareList("digital", state.getActiveHub().digital, "editActiveDigital")
    generateHardwareList("analog", state.getActiveHub().analog, "editActiveAnalog")
    generateHubList()
    document.getElementById("xmlOut").innerText = generate(state.hubs, state.webcams)
}

function generateState() {
    state = new StateObj()
}

function generateHubList() {
    let out = ""
    for (var [i, value] of state.hubs.entries()) {
        out += `<button class="#" onclick="state.setActiveHub(` + i + `)">` + value.type + `</button>`
    }
    document.getElementById("hubList").innerHTML = out
}
function editActiveMotor(index) {
    showEdit()
    document.getElementById("type").innerText = "motor"
    hub = state.getActiveHub()
    motor = hub.motors[index]
    hub.motors[index] = motor
    state.updateActiveHub(hub)
}
function editActiveServo(index) {
    showEdit()
    document.getElementById("type").innerText = "servo"
    hub = state.getActiveHub()
    servo = hub.servos[index]
    console.log(servo)
    hub.servos[index] = servo
    state.updateActiveHub(hub)
}
function editActiveI2C(index) {
    showEdit()
    document.getElementById("type").innerText = "I&sup2;C"
    hub = state.getActiveHub()
    i2c = hub.i2c[index]
    console.log(i2c)
    hub.i2c[index] = i2c
    state.updateActiveHub(hub)
}
function editActiveDigital(index) {
    showEdit()
    document.getElementById("type").innerText = "digital device"
    hub = state.getActiveHub()
    digital = hub.digital[index]
    console.log(digital)
    hub.digital[index] = digital
    state.updateActiveHub(hub)
}
function editActiveAnalog(index) {
    showEdit()
    document.getElementById("type").innerText = "analog device"
    hub = state.getActiveHub()
    analog = hub.analog[index]
    console.log(analog)
    hub.analog[index] = analog
    state.updateActiveHub(hub)
}
function editContent(enumobj, name, port){
    let out = ""
    
    document.getElementById("editContent").innerHTML = out
}
function generateHardwareList(id, list, func) {
    let out = ""
    for (var index in list) {
        out += `<button class="hwbutton" onclick="` + func + `(` + index + `)"> type: ` + list[index].type + " name: " + list[index].name + " port: " + list[index].port + `</button><br>`
    }
    if (out == "") {
        out = "No devices of this type"
    }
    document.getElementById(id).innerHTML = out
}
function showEdit() {
    document.getElementById("edit").style.display = "block"
}
function closeEdit() {
    document.getElementById("edit").style.display = "none"
}

function load() {
    if (state == null) {
        generateState()
    }
    let hub1 = new Hub(hubType.chub);
    hub1.addMotor(motorType.GoBILDA5201, "frontleft", 0);
    hub1.addMotor(motorType.GoBILDA5202_3_4, "frontRight", 1);
    hub1.addServo(servoType.Servo, "claw", 0);
    hub1.addServo(servoType.Servo, "wrist", 1);
    hub1.addAnalog(analogType.AnalogDevice, "Axon", 0);
    hub1.addDigital(digitalType.DigitalDevice, "button", 0);
    let hub2 = new Hub(hubType.exhub);
    hub2.addMotor(motorType.GoBILDA5202_3_4, "slides", 0);

    state.addHub(hub2)
    state.addHub(hub1)
    state.addWebcam(new Webcam("webcam", 0))
}
function downloadXML() {
    downloadBlob("robot.xml", generate(state.hubs, state.webcams))
}