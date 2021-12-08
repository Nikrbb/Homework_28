const calculator = {
    read () {
       let firstItem =  prompt(`Введите первое число`).trim();

       if (!isNaN(firstItem) && firstItem !== null && firstItem !== ``) {
            firstItem = Number(firstItem);
            this.firstNumber = firstItem;
       }
       else {
           alert(`Введенное значение не является числом`);
           return;
        };

        let secondItem =  prompt(`Введите второе значение`).trim();

       if (!isNaN(secondItem) && secondItem !== null && secondItem !== ``) {
            secondItem = Number(secondItem);
            this.secondNumber = secondItem;
       }
       else {
            alert(`Введенное значение не является числом`);
            return;
       };
    },
    sum () {
        return this.firstNumber + this.secondNumber
    },
    mul () {
        return this.firstNumber * this.secondNumber
    },
}
calculator.read()
console.log(calculator.firstNumber);
console.log(calculator.secondNumber);
console.log(calculator.sum());
console.log(calculator.mul());
