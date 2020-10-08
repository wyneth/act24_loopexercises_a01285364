input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        sprite.move(4)
        sprite.turn(Direction.Right, 90)
        basic.pause(200)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 0)
