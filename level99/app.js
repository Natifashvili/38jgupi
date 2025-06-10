let array = [1,2,3,4,5,6];
console.log(array);       
array.push("lomi")       
console.log(array);
array.unshift("model", "speed", "year", "engiline", "light");
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);



 function CarConstructor (model, speed, year){
            this.model = model;
            this.speed = speed;
            this.year  = year;
        }

        const newCar1 = new CarConstructor("bmw", "320", "2024");
        const newCar = new CarConstructor("mercedes", "438", "1938");
        console.log(newCar)
        console.log(newCar1)