const Ship = require('./ship')

it('Test that getPlayer gets player name', () => {
    newShip = Ship("Bean")
    expect(newShip.getPlayer()).toBe("Bean")
})

it('Test that getLength gets ship length', () => {
    newShip = Ship("Bean", 4)
    expect(newShip.getLength()).toBe(4)
})

it('Test that getTotalHit gets total hits', () => {
    newShip = Ship("Bean", 4)
    expect(newShip.getTotalHit()).toBe(0)
})

it('Test that hit adds to totalHit', () => {
    newShip = Ship("Bean", 4)
    newShip.hit()
    expect(newShip.getTotalHit()).toBe(1)
})

it('Test that totalHit does not exceed length', () => {
    newShip = Ship("Bean", 4)
    // Run hit 5 times, maximum should be 4
    newShip.hit()
    newShip.hit()
    newShip.hit()
    newShip.hit()
    newShip.hit()
    expect(newShip.getTotalHit()).toBe(4)
})

it('Test that isSunk displays false if totalHit not equal to length', () => {
    newShip = Ship("Bean", 4)
    expect(newShip.isSunk()).toBe(false)
})

it('Test that isSunk displays true if totalHit equals to length', () => {
    newShip = Ship("Bean", 4)
    newShip.hit()
    newShip.hit()
    newShip.hit()
    newShip.hit()
    expect(newShip.isSunk()).toBe(true)
})
