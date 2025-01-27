class hub{
    constructor(type){
        this.type = type;
        this.motors = [];
        this.servos = [];
        this.i2c = [];
        this.digital = [];
        this.analog = [];
    }

    addChild(){
        if (this.type = "chub"){
            return;
        }
        if (this.type = "exhub"){
            return;
        }
        throw TypeError;
    }

    addMotor(type, name, port){
        this.motors.push(new Motor(type, name, port));
    }

    addServo(type, name, port){
        this.servos.push(new Servo(type, name, port));
    }   

    addI2c(type, name, port, bus){
        this.i2c.push(new I2c(type, name, port, bus));
    }

    addDigital(name, port){
        this.digital.push(new Digital(name, port));
    }

    addAnalog(name, port){
        this.analog.push(new Analog(name, port));
    }
}

class Motor{
    constructor(type, name, port){
        this.type = type;
        this.name = name;
        this.port = port;
    }
}

class Servo{
    constructor(type, name, port){
        this.type = type;
        this.name = name;
        this.port = port;
    }
}

class I2c{
    constructor(type, name, port, bus){
        this.type = type;
        this.name = name;
        this.port = port;
        this.bus = bus;
    }
}

class Digital{
    constructor(name, port){
        this.name = name;
        this.port = port;
    }
}

class Analog{
    constructor(name, port){
        this.name = name;
        this.port = port;
    }
}

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
            out += `             <DigitalDevice name="` + digital.name +`" port="` + digital.port + `" />\n`
        }
        for (var analog of hub.analog){
            console.log(analog)
            out += `             <AnalogInput name="` + analog.name +`" port="` + analog.port + `" />\n`
        }
        out += `        </LynxModule>\n`
    }
    out += `    </LynxUsbDevice>\n`
    for (const webcam of webcams){
        out += `<Webcam name="` + webcam.name + `" serialNumber="` + webcam.serial + `" />\n`
    }
    out += `</Robot>\n`
    return out.split('\n')
}