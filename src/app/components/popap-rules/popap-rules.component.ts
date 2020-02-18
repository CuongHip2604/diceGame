import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


@Component({
  selector: "app-popap-rules",
  templateUrl: "./popap-rules.component.html",
  styleUrls: ["./popap-rules.component.css"]
})
export class PopapRulesComponent implements OnInit {
  @Input() isPlaying;
  @Input() activePlayer;
  @Input() scorePlayer;
  @Input() currentScore;
  @Input() dices;
  @Input() isOpenPopap;
  @Output() handleEventConfirm = new EventEmitter();
  
  constructor() {}

  ngOnInit() {}
  getClassPopap() {
    return {
      'open-popap': this.isOpenPopap
    };
  }
  handleConfirm() {
    this.handleEventConfirm.emit('handleConfirm');
  }


}
