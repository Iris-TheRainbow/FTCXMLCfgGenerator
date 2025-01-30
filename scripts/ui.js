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
    showRemove()
}

function editActiveServo(index) {
    hub = state.getActiveHub()
    state.setActiveList(hub.servos)
    state.setActiveListIndex(index)
    state.setActiveType(servoType)
    document.getElementById("caption").innerText = "Edit servo: " + hub.servos[index].name
    showEdit()
    showRemove()
}

function editActiveI2C(index) {
    hub = state.getActiveHub()
    state.setActiveList(hub.i2c)
    state.setActiveListIndex(index)
    state.setActiveType(i2cType)
    document.getElementById("caption").innerHTML = "Edit I&sup2;c: " + hub.i2c[index].name
    showEdit()
    showRemove()
}
function editActiveDigital(index) {
    hub = state.getActiveHub()
    state.setActiveList(hub.digital)
    state.setActiveListIndex(index)
    state.setActiveType(digitalType)
    document.getElementById("caption").innerText = "Edit digital device: " + hub.digital[index].name
    showEdit()
    showRemove()
}
function editActiveAnalog(index) {
    hub = state.getActiveHub()
    state.setActiveList(hub.Analog)
    state.setActiveListIndex(index)
    state.setActiveType(analogType)
    document.getElementById("caption").innerText = "Edit analog device: " + hub.analog[index].name
    showEdit()
    showRemove()
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

function setActiveType(type) {
    setActiveTypeInternal(type)
    hardware = state.activeList[state.activeListIndex]
    if (hardware == null){
        hardware = new PlaceHolder()
    }
    hardware.setType(type);
    document.getElementById("typeButton").innerHTML = `<button class="dropbtn">` + hardware.type + `</button>`
}
function setActiveTypeInternal(type) {
    state.activeType = type
}

function applyChange() {
    hardware = state.activeList[state.activeListIndex]
    console.log(hardware)
    hardware.name = document.getElementById("name").value
    hardware.port = parseInt(document.getElementById("port").value)
    state.updateActiveHub(hub)
    closeEdit()
}

function showEdit() {
    out = `
    <div>
        <div>
            <div class="dropdown">
                <span id="typeButton"></span>
                <div class="dropdown-content">`
    for (var item in Object.entries(state.activeType)) {
        let name = Object.entries(state.activeType)[item][0]
        code = Object.entries(state.activeType)[item][1]
        out += `<button class="#" onclick="setActiveType('${code}')">${name}</button>`
    } out += `
                </div>
            </div>
            <input type="text" id="name" value="` + state.activeList[state.activeListIndex].name + `">
            <input type="number" id="port" value="` + state.activeList[state.activeListIndex].port + `">
        </div>
        <div>
        </div>
    </div>`
    document.getElementById("apply").onclick = applyChange
    document.getElementById("editContent").innerHTML = out
    document.getElementById("typeButton").innerHTML = `<button class="dropbtn">` + state.activeList[state.activeListIndex].type + `</button>`
    document.getElementById("edit").style.display = "block"

}
function showNew() {
    out = `
    <div>
        <div>
            <div class="dropdown">
                <span id="typeButton"></span>
                <div class="dropdown-content">`
    for (var item in Object.entries(state.activeType)) {
        let name = Object.entries(state.activeType)[item][0]
        code = Object.entries(state.activeType)[item][1]
        out += `<button class="#" onclick="setActiveType('${code}')">${name}</button>`
    } out += `
                </div>
            </div>
            <input type="text" id="name" placeholder="device name">
            <input type="number" id="port" placeholder="device port">
        </div>
        <div>
        </div>
    </div>`

    document.getElementById("editContent").innerHTML = out
    document.getElementById("typeButton").innerHTML = `<button class="dropbtn"> Select a Type</button>`
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
    let hub2 = new Hub(hubType.exhub);

    state.addHub(hub2)
    state.addHub(hub1)
}
function downloadXML() {
    downloadBlob("robot.xml", generate(state.hubs, state.webcams))
}
function applyNewMotor() {
    let name = document.getElementById("name").value
    let port = parseInt(document.getElementById("port").value)
    let type = state.activeType
    state.getActiveHub().addMotor(type, name, port)
    state.updateActiveHub(hub)
    closeEdit()
}
function addMotor() {
    hub = state.getActiveHub()
    state.setActiveList(hub.motors)
    state.setActiveListIndex(state.activeList.length - 1)
    state.setActiveType(motorType)
    setActiveTypeInternal(motorType)
    document.getElementById("caption").innerText = "New motor"
    document.getElementById("apply").onclick = applyNewMotor
    showNew()
}
function applyNewServo() {
    let name = document.getElementById("name").value
    let port = parseInt(document.getElementById("port").value)
    let type = state.activeType
    state.getActiveHub().addServo(type, name, port)
    state.updateActiveHub(hub)
    closeEdit()
}

function addServo() {
    hub = state.getActiveHub()
    state.setActiveList(hub.servos)
    state.setActiveListIndex(state.activeList.length - 1)
    state.setActiveType(servoType)
    setActiveTypeInternal(servoType)
    document.getElementById("caption").innerText = "New servo"
    document.getElementById("apply").onclick = applyNewServo
    showNew()
}

function applyNewI2C() {
    let name = document.getElementById("name").value
    let port = parseInt(document.getElementById("port").value)
    let type = state.activeType
    state.getActiveHub().addI2c(type, name, port)
    state.updateActiveHub(hub)
    closeEdit()
}

function addI2C() {
    hub = state.getActiveHub()
    state.setActiveList(hub.i2c)
    state.setActiveListIndex(state.activeList.length - 1)
    state.setActiveType(i2cType)
    setActiveTypeInternal(i2cType)
    document.getElementById("caption").innerHTML = "New I&sup2;c"
    document.getElementById("apply").onclick = applyNewI2C
    showNew()
}

function applyNewDigital() {
    let name = document.getElementById("name").value
    let port = parseInt(document.getElementById("port").value)
    let type = state.activeType
    state.getActiveHub().addDigital(type, name, port)
    state.updateActiveHub(hub)
    closeEdit()
}

function addDigital() {
    hub = state.getActiveHub()
    state.setActiveList(hub.digital)
    state.setActiveListIndex(state.activeList.length - 1)
    state.setActiveType(digitalType)
    setActiveTypeInternal(digitalType)
    document.getElementById("caption").innerText = "New digital device"
    document.getElementById("apply").onclick = applyNewDigital
    showNew()
}

function applyNewAnalog() {
    let name = document.getElementById("name").value
    let port = parseInt(document.getElementById("port").value)
    let type = state.activeType
    state.getActiveHub().addAnalog(type, name, port)
    state.updateActiveHub(hub)
    closeEdit()
}
function remove(){
    state.activeList.splice(state.activeListIndex, 1);
    document.getElementById("remove").style.display = "none"
    state.updateActiveHub(state.getActiveHub())
    closeEdit()
}
function showRemove(){
    document.getElementById("remove").style.display = "block"
}

function addAnalog() {
    hub = state.getActiveHub()
    state.setActiveList(hub.analog)
    state.setActiveListIndex(state.activeList.length - 1)
    state.setActiveType(analogType)
    setActiveTypeInternal(analogType)
    document.getElementById("caption").innerText = "New analog device"
    document.getElementById("apply").onclick = applyNewAnalog
    showNew()
}
