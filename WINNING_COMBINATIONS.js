const winningCombinations = [];

// Horizontal Wins
for (let row = 0; row < 6; row++) {
  for (let col = 0; col < 4; col++) {
    winningCombinations.push([
      { row: row, column: col },
      { row: row, column: col + 1 },
      { row: row, column: col + 2 },
      { row: row, column: col + 3 }
    ]);
  }
}

// Vertical Wins
for (let col = 0; col < 7; col++) {
  for (let row = 0; row < 3; row++) {
    winningCombinations.push([
      { row: row, column: col },
      { row: row + 1, column: col },
      { row: row + 2, column: col },
      { row: row + 3, column: col }
    ]);
  }
}

// Diagonal Wins (Bottom-left to Top-right)
for (let row = 3; row < 6; row++) {
  for (let col = 0; col < 4; col++) {
    winningCombinations.push([
      { row: row, column: col },
      { row: row - 1, column: col + 1 },
      { row: row - 2, column: col + 2 },
      { row: row - 3, column: col + 3 }
    ]);
  }
}

// Diagonal Wins (Top-left to Bottom-right)
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 4; col++) {
    winningCombinations.push([
      { row: row, column: col },
      { row: row + 1, column: col + 1 },
      { row: row + 2, column: col + 2 },
      { row: row + 3, column: col + 3 }
    ]);
  }
}

export default winningCombinations;

