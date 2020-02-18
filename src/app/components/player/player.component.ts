import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  @Output() handleEventIsWinner = new EventEmitter();
  @Input() activePlayer: any;
  @Input() scorePlayer: Array<Number>;
  @Input() currentScore: Number;
  @Input() isWinner: Boolean;
  constructor() {}

  ngOnInit() {}
  getNamePlayer(index) {
    var defaultName = 'Player ' + (index + 1);
    // console.log(defaultName, index, this.isWinner, this.activePlayer);
    if(this.activePlayer == index && this.isWinner){
      defaultName = "WINNER !";
    }

    return defaultName;
  }
  sendEvent(){
    this.handleEventIsWinner.emit('handleEventIsWinner');
  }
}
