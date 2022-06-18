const Ship = require('./ship')

it('Test that get player name works', () => {
    newShip = Ship("Bean")
    expect(newShip.getPlayer()).toBe("Bean")
})