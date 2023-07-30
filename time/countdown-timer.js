export class CountdownTimer {
  isActive = false;
  elapsedTimeSeconds = 0;
  totalTimeSeconds = 0;

  constructor(timeAllowedSeconds) {
    this.isActive = false;
    this.elapsedTimeSeconds = 0;
    this.totalTimeSeconds = timeAllowedSeconds;
  }

  begin() {
    this.isActive = true;
    this.elapsedTimeSeconds = 0;
  }

  stop() {
    this.isActive = false;
  }

  reset() {
    this.isActive = false;
    this.elapsedTimeSeconds = 0;
  }

  update(dt) {
    if (!this.isActive) {
      return;
    }
    this.elapsedTimeSeconds += dt;
  }

  /**
   * num(1) -> 01
   * num(9) -> 09
   * num(11) -> 11
   */
  formatIntAsTime(num) {
    return ('0' + num).slice(-2);
  }

  /**
   * Output: 01:34, 11:02, 23:59
   */
  secondsToHHMMSS(timeSeconds) {
    const hours = Math.floor(timeSeconds / 3600);
    const minutes = Math.floor((timeSeconds - hours * 3600) / 60);
    const seconds = Math.floor(timeSeconds - hours * 3600 - minutes * 60);
    return `${this.formatIntAsTime(minutes)}:${this.formatIntAsTime(seconds)}`;
  }

  getTimeLeft() {
    return this.secondsToHHMMSS(
      this.totalTimeSeconds - this.elapsedTimeSeconds
    );
  }
}
