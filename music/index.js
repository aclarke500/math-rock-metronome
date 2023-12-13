class Bar{
  constructor(timeSignature, tempo){
    this.timeSignature = timeSignature;
    this.temp = tempo;
    this.updateParameters(timeSignature);
    // this.play = true;
    this.cycle();
  }
  updateParameters(timeSignature, tempo){
    this.tempo = tempo;
    this.timeSignature = timeSignature;
    const lengthOfBeat = this.getLengthOfBeat(this.tempo);
    this.beats = [];

    for(let i = 1; i <= this.timeSignature; i++){
      this.beats.push({
        beat: i.toString(),
        isActive: false,
        numberOfMs: lengthOfBeat,
        bar: this, // give pointer so beat can access bar
      })
    }
  }
  getLengthOfBeat(tempo){
    const msPerMinute = 60000;
    const msPerBeat = msPerMinute / tempo;
    return msPerBeat;
  }
  toggle(){
    this.play = !this.play;
    if (this.play){
      this.cycle();
    }
  }
  cycle(){
    while(this.play){
      console.log('cycle');
    this.beats.forEach((beat, i) => {
      console.log('beat', beat);
        beat.isActive = true;
        // wait for length of beat
        setTimeout(() => {
          beat.isActive = false;
        }, 1000000);
        // set to inactive
        beat.isActive = false;
    })
  }
}

}

// const b = new Bar(4, 120);
// // b.toggle();

// function sleep(milliseconds) {
//   return new Promise(resolve => setTimeout(resolve, milliseconds));
// }

// async function delayedGreeting() {
//   console.log('Hello');
  
//   await sleep(2000); // Waits for 2 seconds
  
//   console.log('World!');
// }

// delayedGreeting();



export default Bar;