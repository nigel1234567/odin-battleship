const Ship = (player, length) => {
    const getPlayer = () => player;
    const getLength = () => length;

    // Initialize
    let totalHit = 0;
    let sunk = false;

    const getTotalHit = () => totalHit;

    const hit = () =>  {
        if (totalHit < length) {
            totalHit += 1;
        }
    }

    const isSunk = () => {
        if (totalHit === length) {
            sunk = true;
        } else {
            sunk = false;
        }
        console.log(sunk)
    }

    return {
        getPlayer,
        getLength,
        hit,
        isSunk,
        getTotalHit
    }
}

