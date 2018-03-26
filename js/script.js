function Phone (brand, price, color) {
  this.brand = brand
  this.price = price
  this.color = color
}

Phone.prototype.printInfo = function () {
  console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.')
}

var iPhoneX = new Phone('Apple', 5729, 'space grey')
iPhoneX.printInfo()
var samsungGalaxyS9 = new Phone('Samsung', 3599, 'midnight black')
samsungGalaxyS9.printInfo()
var onePlusOne5T = new Phone('OnePlus5T', 2799, 'lava red')
onePlusOne5T.printInfo()
