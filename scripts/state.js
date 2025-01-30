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