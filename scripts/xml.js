function generate(hubs, webcams){
    let out = `<?xml version='1.0' encoding='UTF-8' standalone='yes' ?>
<Robot type="FirstInspires-FTC">
    <LynxUsbDevice name="Control Hub Portal" serialNumber="(embedded)" parentModuleAddress="173">\n`
    for (var hub of hubs){
        if (hub.type == 'exhub'){
            out += `        <LynxModule name="Expansion Hub 1" port="1">\n`
        }else{
            out +=`         <LynxModule name="Control Hub" port="173">\n`
        }
        for (var motor of hub.motors){
            console.log(motor)
            out += `             <` + motor.type + ` name="` + motor.name +`" port="` + motor.port + `" />\n`
        }
        for (var servo of hub.servos){
            console.log(servo)
            out += `             <` + servo.type + ` name="` + servo.name +`" port="` + servo.port + `" />\n`
        }
        for (var i2c of hub.i2c){
            console.log(i2c)
            out += `             <` + i2c.type + ` name="` + i2c.name +`" port="` + i2c.port + `" bus="` + i2c.bus + `" />\n`
        }
        for (var digital of hub.digital){
            console.log(digital)
            out += `             <`+ digital.type+ ` name="` + digital.name +`" port="` + digital.port + `" />\n`
        }
        for (var analog of hub.analog){
            console.log(analog)
            out += `             <`+ analog.type+ ` name="` + analog.name +`" port="` + analog.port + `" />\n`
        }
        out += `        </LynxModule>\n`
    }
    out += `    </LynxUsbDevice>\n`
    for (const webcam of webcams){
        out += `    <Webcam name="` + webcam.name + `" serialNumber="` + webcam.serial + `" />\n`
    }
    out += `</Robot>\n`
    return out.split('\n')
}