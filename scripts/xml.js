function generate(hubs, webcams){
    let out = `<?xml version='1.0' encoding='UTF-8' standalone='yes' ?>
<Robot type="FirstInspires-FTC">
    <LynxUsbDevice name="Control Hub Portal" serialNumber="(embedded)" parentModuleAddress="173">\n`
    for (var hub of hubs){
        if (hub.type == hubType.exhub){
            out += `        <LynxModule name="Expansion Hub ` + (hubs.indexOf(hub)) +  `" port="1">\n`
        }else if (hub.type == hubType.chub){
            out +=`         <LynxModule name="Control Hub" port="173">\n`
        } else{
            out += `        <LynxModule name="Servo Hub ` + (hubs.indexOf(hub)) +  `" port="1">\n`
        }
        for (var motor of hub.motors){
            out += `             <` + motor.type + ` name="` + motor.name +`" port="` + motor.port + `" />\n`
        }
        for (var servo of hub.servos){
            out += `             <` + servo.type + ` name="` + servo.name +`" port="` + servo.port + `" />\n`
        }
        for (var i2c of hub.i2c){
            out += `             <` + i2c.type + ` name="` + i2c.name +`" port="` + i2c.port + `" bus="` + i2c.bus + `" />\n`
        }
        for (var digital of hub.digital){
            out += `             <`+ digital.type+ ` name="` + digital.name +`" port="` + digital.port + `" />\n`
        }
        for (var analog of hub.analog){
            out += `             <`+ analog.type+ ` name="` + analog.name +`" port="` + analog.port + `" />\n`
        }
        out += `        </LynxModule>\n`
    }
    out += `    </LynxUsbDevice>\n`
    for (const webcam of webcams){
        out += `    <Webcam name="` + webcam.name + `" serialNumber="` + webcam.serial + `" />\n`
    }
    out += `</Robot>\n`
    let output = ""
    for (var line of out.split('\n')){
        output += line + "\n"
    }
    return output
}