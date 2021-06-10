class Clock {
     
    constructor() {
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.

      const date = new Date()
      this.hours = date.getHours(); 
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      this._tick();

        setInterval(this._tick.bind(this), 1000)

    }
  
    // setInterval(this._tick.bind(this), 1000)
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
     this.seconds++

          if (this.seconds === 60) {
            this.minutes++
            this.seconds = 0
          }
          if (this.minutes === 60) {
            this.hours++
            this.minutes = 0
          }

      this.printTime();
    }
  }

  const clock = new Clock();

//   setInterval(clock._tick.bind(clock), 1000)


clock._tick();

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        rl.question('Pick a number:', answer => {
            //Convert user input string to integer 
            //console.log(sum += user input parsed)
            //AddNumbers(sum, numsLeft - 1, completionCallback)
        })
        
    } else {
        completionCallback(sum)
    }
}
