let richting = 0
basic.forever(function () {
    richting = input.compassHeading()
    if (315 <= richting || 45 >= richting) {
        basic.showArrow(ArrowNames.North)
    }
    if (45 <= richting && 135 >= richting) {
        basic.showArrow(ArrowNames.East)
    }
    if (135 <= richting && 225 >= richting) {
        basic.showArrow(ArrowNames.South)
    }
    if (225 <= richting && 315 >= richting) {
        basic.showArrow(ArrowNames.West)
    }
})
