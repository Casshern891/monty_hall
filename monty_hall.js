function game() {
  const car = Math.floor(Math.random() * 3) + 1;
  let choice = Math.floor(Math.random() * 3) + 1;
  let revealed = 0;
  let result = "Goat!"
  if (choice === 1) {
    if (car === 1) {
        revealed = 2;
        choice = 3;
    } else if (car === 2) {
        revealed = 3;
        choice = 2;
    } else if (car === 3) {
        revealed = 2;
        choice = 3;
    }
  } else if (choice === 2) {
    if (car === 1) {
        revealed = 3;
        choice = 1;
    } else if (car === 2) {
        revealed = 1;
        choice = 3;
    } else if (car === 3) {
        revealed = 1;
        choice = 3;
    }
  } else if (choice === 3) {
    if (car === 1) {
        revealed = 2;
        choice = 1;
    } else if (car === 2) {
        revealed = 1;
        choice = 2;
    } else if (car === 3) {
        revealed = 1;
        choice = 2;
    }
  }

  if (choice === car) {
    result = "Car!"
  }
  return result;
}

function test(n) {
    const target = n;
    let result = 0;
    for (let i=1; i<= target; i++) {
      const prize = game();
      if (prize == "Car!") {
        result += 1;
      }
    }
    const percent = ((result / n) * 100).toFixed(1);
    console.log(`${percent}% of ${n} games were won!`);
}

test(1000);