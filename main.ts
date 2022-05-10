input.onButtonPressed(Button.A, function () {
    basic.showString("" + (dht11_dht22.readData(dataType.humidity)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (dht11_dht22.readData(dataType.temperature)))
})
basic.showLeds(`
    . . # . .
    # # # # #
    . . # . .
    . # . # .
    # . . . #
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    true
    )
    if (dht11_dht22.readData(dataType.humidity) < 30) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else if (dht11_dht22.readData(dataType.humidity) < 70) {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
    }
})
basic.forever(function () {
    if (dht11_dht22.readData(dataType.temperature) < 20) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else if (dht11_dht22.readData(dataType.temperature) < 25) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
})
