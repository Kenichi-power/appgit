function catMouse(x, j){
    if (!x.includes('D')||!x.includes('C')||!x.includes('m')) return "boring without all three"
    if (Math.abs(x.indexOf('C')-x.indexOf('m'))>j) return "Escaped!"
    if (x.replace(/\./g,'')==='CDm'||x.replace(/\./g,'')==='mDC') return 'Protected!'
    return "Caught!"
  }