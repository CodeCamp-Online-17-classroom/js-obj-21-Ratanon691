function Calculator(){
  this.num1 = 0
  this.num2 = 0
  
  this.read = function(){
    this.num1 = +prompt(`Give me a number`)
    this.num2 = +prompt(`Give me the second number`)
  }
  this.sum = function(){
    return this.num1 + this.num2
  }
  this.mul = function(){
    return this.num1 * this.num2
  }
}

let calculator = new Calculator();
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
