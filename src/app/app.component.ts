import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "diceGame";
  activePlayer = 0;
  scorePlayer = [20, 40];
  currentScore = 3;
  isPlaying = false;
  isOpenPopap = false;
  dices = [1, 5];
  finalScore = 0;
  isWinner: Boolean = false;

  constructor() {}

  handleEventNewGame() {
    this.isOpenPopap = true;
  }

  handleInput($event){
    this.finalScore = $event;
  }

  handleIsWinner() {
    let { scorePlayer, finalScore } = this;
    if (scorePlayer[0] >= finalScore || scorePlayer[1] >= finalScore) {
      this.isPlaying = false;
      return (this.isWinner = true);
    }
    return (this.isWinner = false);
  }

  handleConfirm() {
    this.isPlaying = true;
    this.isOpenPopap = false;
    this.activePlayer = 0;
    this.scorePlayer = [0, 0];
    this.currentScore = 0;
    this.dices = [1, 1];
    this.isWinner = false;
  }

  handleRollDice() {
    //ktra xem neu da bat dau choi thi moi rolldice
    if (this.isPlaying) {
      var dice1 = Math.floor(Math.random() * 6) + 1;
      var dice2 = Math.floor(Math.random() * 6) + 1;
      this.dices = [dice1, dice2];
      // console.log(dice1, dice2);
      // ktra xem ng choi co quay trung o so 1 hay k
      if (dice1 === 1 || dice2 === 1) {
        let activePlayer = this.activePlayer;
        setTimeout(function() {
          alert(
            `Người chơi số ${activePlayer + 1} đã qua trúng ô số 1. Rất tiếc :(`
          );
        }, 15);
        // chuyen nguoi choi
        this.next();
      } else {
        //cong vao diem tam thoi
        this.currentScore = this.currentScore + dice1 + dice2;
      }
    } else {
      alert("Vui lòng ấn nút NEW GAME!!");
    }
  }

  handleHold() {
    if (this.isPlaying) {
      let { scorePlayer, activePlayer, currentScore } = this;
      let oldScore = scorePlayer[activePlayer];
      let cloneScorePlayer = [...scorePlayer];
      cloneScorePlayer[activePlayer] = oldScore + currentScore;
      this.scorePlayer = cloneScorePlayer;
      if (!this.handleIsWinner()) {
        this.next();
      }
    } else {
      alert("Vui lòng ấn nút NEW GAME!!");
    }
  }

  next() {
    this.activePlayer = this.activePlayer == 0 ? 1 : 0;
    this.currentScore = 0;
  }
}
