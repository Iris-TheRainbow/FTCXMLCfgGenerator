class StateObj {
    activeHubIndex = null;
    activeHub = null;
    activeList = null;
    activeListIndex = null;
    activeType = null;
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
    setActiveList(list){
        this.activeList = list
    }
    setActiveListIndex(index){
        this.activeListIndex = index
    }
    setActiveType(type){
        this.activeType = type;
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
    hub = state.getActiveHub()
    state.setActiveList(hub.motors)
    state.setActiveListIndex(index)
    state.setActiveType(motorType)
    document.getElementById("caption").innerText = "Edit motor: " + hub.motors[index].name
    showEdit()
}

function editActiveServo(index) {
    hub = state.getActiveHub()
    state.setActiveList(hub.servos)
    state.setActiveListIndex(index)
    state.setActiveType(servoType)
    document.getElementById("caption").innerText = "Edit servo: " + hub.servos[index].name
    showEdit()
}

function editActiveI2C(index) {
    hub = state.getActiveHub()
    state.setActiveList(hub.i2c)
    state.setActiveListIndex(index)
    state.setActiveType(i2cType)
    document.getElementById("caption").innerHTML = "Edit I&sup2;c: " + hub.i2c[index].name
    showEdit()
}
function editActiveDigital(index) {
    hub = state.getActiveHub()
    state.setActiveList(hub.digital)
    state.setActiveListIndex(index)
    state.setActiveType(digitalType)
    document.getElementById("caption").innerText = "Edit digital device: " + hub.digital[index].name
    showEdit()
}
function editActiveAnalog(index) {
    hub = state.getActiveHub()
    state.setActiveList(hub.Analog)
    state.setActiveListIndex(index)
    state.setActiveType(analogType)
    document.getElementById("caption").innerText = "Edit analog device: " + hub.analog[index].name
    showEdit()
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
function setActiveType(type){
    console.log(state.activeList[state.activeListIndex])
    console.log(type)
    hardware = state.activeList[state.activeListIndex]
    hardware.setType(type);
    document.getElementById("typeButton").innerHTML  = `<button class="dropbtn">` + state.activeList[state.activeListIndex].type + `</button>`
}

function applyChange(){
    state.updateActiveHub(hub)
    closeEdit()
}

function showEdit() {
    document.getElementById("edit").style.display = "block"
    out =`
    <div>
        <div>
            <div class="dropdown">
                <span id="typeButton"></span>
                <div class="dropdown-content">`
                 for (var item in Object.entries(state.activeType)){
                    let name = Object.entries(state.activeType)[item][0]
                    code = Object.entries(state.activeType)[item][1]
                    out += `<button class="#" onclick="setActiveType('${code}')">${name}</button>`
                 }  out +=`
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>`

    document.getElementById("editContent").innerHTML = out
    document.getElementById("typeButton").innerHTML  = `<button class="dropbtn">` + state.activeList[state.activeListIndex].type + `</button>`
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