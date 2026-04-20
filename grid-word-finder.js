function gridWordsFinder(grid, words) {
  if (!grid.length || !words.length) return [];

  let row = [];
  let col = [];
  let res = [];

  // build rows
  for (let j = 0; j < grid.length; j++) {
    row.push(grid[j].join(''));
  }

  // build columns
  for (let j = 0; j < grid[0].length; j++) {
    let word = '';
    for (let i = 0; i < grid.length; i++) {
      word += grid[i][j];
    }
    col.push(word);
  }

  // check words
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (
      row.some(r => r.includes(w)) ||
      col.some(c => c.includes(w))
    ) {
      res.push(w);
    }
  }

  return [...new Set(res)];
}
