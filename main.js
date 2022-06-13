let elevator = {
  min: 1,
  max: 5,
  currentFloor: 1,
  printFloor: function () {
    console.log(this.currentFloor + " floor");
  },
  printError: function () {
    console.log("error");
  },
  upOneFloor: function (type, margin) {
    if (this.currentFloor >= this.min && this.currentFloor < this.max) {
      this.currentFloor++;
      let marginBottom = parseInt(getComputedStyle(elev).marginBottom);
      elev.style.marginBottom = `${
        type === "up" ? marginBottom + 90 : margin
      }px`;
      elev.style.transition = "1s";
      this.printFloor();
    } else {
      this.printError();
    }
    if (margin > 500) {
      elev.style.marginBottom = `${margin}px`;
    }
  },
  downOneFloor: function (type, margin) {
    if (this.currentFloor > this.min && this.currentFloor <= this.max) {
      this.currentFloor--;
      let marginBottom = parseInt(getComputedStyle(elev).marginBottom);
      elev.style.marginBottom = `${
        type === "down" ? marginBottom - 90 : margin
      }px`;
      elev.style.transition = "1s";
      this.printFloor();
    } else {
      this.printError();
    }
  },
  toFloor: function (floor, margin) {
    if (floor >= this.min && floor <= this.max) {
      while (this.currentFloor < floor) {
        this.upOneFloor("floor", margin);
      }
      while (this.currentFloor > floor) {
        this.downOneFloor("floor", margin);
      }
    } else {
      this.printError();
    }
  },
};
//! BTN UP start
let elev = document.getElementById("elevator");
let btnUp = document.createElement("button");
btnUp.setAttribute("id", "btn-up");
btnUp.innerHTML = "UP";
document.body.append(btnUp);
btnUp.addEventListener("click", function () {
  elevator.upOneFloor("up", 90);
});
//! BTN UP end

//! BTN DOWN start
let btnDown = document.createElement("button");
btnDown.setAttribute("id", "btn-down");
btnDown.innerHTML = "DOWN";
document.body.append(btnDown);
btnDown.addEventListener("click", function () {
  elevator.downOneFloor("down", 90);
});
//! BTN DOWN end

//! FLOORS start
let floorOne = document.getElementById("floor-1");
let floorTwo = document.getElementById("floor-2");
let floorThree = document.getElementById("floor-3");
let floorFour = document.getElementById("floor-4");
let floorFive = document.getElementById("floor-5");
//! FLOORS end

//! FLOORS SETTINGS start
floorOne.addEventListener("click", function () {
  elevator.toFloor(1, 0);
});
floorTwo.addEventListener("click", function () {
  elevator.toFloor(2, 90);
});
floorThree.addEventListener("click", function () {
  elevator.toFloor(3, 180);
});
floorFour.addEventListener("click", function () {
  elevator.toFloor(4, 270);
});
floorFive.addEventListener("click", function () {
  elevator.toFloor(5, 360);
});
//! FLOORS SETTINGS end
