console.log("Hello World!\n==========\n");

// Exercise 1 Section
function printOdds(count) {
    for (let i = 1 ; i < count; i++) {
        if (i % 2 != 0) {
            console.log(i);
         }
    }
}
printOdds(100);



// Exercise 2 Section
function checkAge(userName, age) {
  let aboveSixteen = `congrats ${userName}, you can drive`;
  let belowSixteen = `sorry ${userName}, but you need to wait until you're 16.`
  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}
checkAge("Riddhi", 18);
checkAge("Shiv", 15);

// Exercise 3

function checkQuadrant(x,y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x == 0 && y != 0)  {
        return "Y - Axis";
    } else if (x != 0 && y == 0) {
        return "X - Axis";
    }
}
console.log(checkQuadrant(1, 2));
console.log(checkQuadrant(-6, 18));
console.log(checkQuadrant(0, 2));
console.log(checkQuadrant(-4, 0));


//Exercise 4

function validTriangle(a, b, c) {
     if (a + b <= c || a + c <= b || b + c <= a) {
        console.log(`invalid triangle`)
     } else if (a == b && a == c && b == c) {
        console.log(`equilateral triangle`);
     } else if ((a != b && a != c && b != c)) {
        console.log(`scalene triangle`);
     } else {
        console.log(`isoceles triangle`);
     }
    }
            
    validTriangle(1,1,2);
    validTriangle(2,2,2);
    validTriangle(6,5,4);
    validTriangle(1,2,2);
    


