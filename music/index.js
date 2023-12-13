class Bar {
  constructor(timeSignature, tempo) {
    this.timeSignature = timeSignature;
    this.tempo = tempo;
    this.updateParameters(timeSignature, tempo);
    this.play = false;
    this.intervalId = null; // Store the interval ID
  }

  updateParameters(timeSignature, tempo) {
    this.tempo = tempo;
    this.timeSignature = timeSignature;
    const lengthOfBeat = this.getLengthOfBeat(tempo);
    console.log('lengthOfBeat', lengthOfBeat);
    this.beats = [];

    for (let i = 1; i <= this.timeSignature; i++) {
      this.beats.push({
        beat: i.toString(),
        isActive: false,
        numberOfMs: lengthOfBeat,
        bar: this, // give pointer so beat can access bar
        isActiveFunction: null,
      });
    }
    console.log("isActuve Function wiped")
  }

  getLengthOfBeat(tempo) {
    const msPerMinute = 60000;
    return msPerMinute / tempo;
  }

  toggle() {
    this.play = !this.play;
    if (this.play) {
      this.startCycle();
    } else {
      this.stopCycle();
    }
  }

  startCycle() {
    let currentBeat = 0;
    this.intervalId = setInterval(() => {
      // Set all beats to inactive
      this.beats.forEach(beat => beat.isActive = false);

      // Activate the current beat
      this.beats[currentBeat].isActive = true;

      // Move to the next beat after numberOfMs
      setTimeout(() => {
        this.beats[currentBeat].isActive = false;
      }, this.beats[currentBeat].numberOfMs);

      // Move to the next beat
      currentBeat = (currentBeat + 1) % this.beats.length;
    }, this.beats[0].numberOfMs);
  }


  stopCycle() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  toggleBeat(beat) {
    beat.isActive = !beat.isActive;
    // beat.isActiveFunction(beat.isActive);
  }
}

export default Bar;