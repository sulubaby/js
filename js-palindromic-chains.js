let p = (n) => {
  n = String(n)
  let x = "";
  for (let i = 0; i < n.length; i++) {
    x = n[i] + x;
  }
  return Number(x)
}

function palindromicChain(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    let tries = 0;
    
    while (n !== p(n) && tries < 100) {
      n = n + p(n)
      tries++;
    }
    res.push(n ===p(n) ? n : 0);
  }
  return res
}
