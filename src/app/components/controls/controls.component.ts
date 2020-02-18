import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-controls",
  templateUrl: "./controls.component.html",
  styleUrls: ["./controls.component.css"]
})
export class ControlsComponent implements OnInit {
  @Output() handleEventNewGame = new EventEmitter<Boolean>();
  @Output() handleEventRollDices = new EventEmitter();
  @Output() handleEventHold = new EventEmitter();
  @Output() handleEventInput = new EventEmitter();
  @Input() isOpenPopap: Boolean;
  @Input() finalScore: Number;
  @Input() isPlaying: Boolean;

  constructor() {}

  ngOnInit() {}
  handleNewGame() {
    this.handleEventNewGame.emit(this.isOpenPopap);
  }
  rollDice() {
    this.handleEventRollDices.emit("handleRollDice");
  }
  hold() {
    this.handleEventHold.emit("handleHold");
  }
  handleInput($event) {
    var number: Number = $event.target.value;
    // console.log(number);
    this.finalScore = number;
    return this.handleEventInput.emit(this.finalScore);
  }

}
