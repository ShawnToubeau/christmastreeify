var string = "Movements"

var halfway = string.length / 2

for (var i = 0; i <= string.length; i++) {
  var spaces = halfway - i + 5
  var count = 0
  var leaves = ''
  var star = ''

  while (spaces > 0) {
    leaves += ' '
    spaces--;
  }

  if (i == 1) {
    star += leaves
    star += '*'
    console.log(star)
  }

  while (count < i) {
    leaves += (string.charAt(count)) + ' '
    count++
  }
  console.log(leaves)
}

var stump = ''
while (halfway > -3) {
  stump += ' '
  halfway--;
}
stump += '||'
console.log(stump)
