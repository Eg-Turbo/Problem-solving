function catAndMouse(x, y, z) {
    if(Math.abs(x-z)>Math.abs(y-z)) return "Cat B"
    if(Math.abs(y-z)>Math.abs(x-z)) return "Cat A"
    if(Math.abs(y-z)==Math.abs(x-z)) return "Mouse C"
}