radio.setGroup(1)
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(6)
basic.forever(function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
