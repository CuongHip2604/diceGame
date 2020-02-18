import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


@Component({
  selector: "app-dices",
  templateUrl: "./dices.component.html",
  styleUrls: ["./dices.component.css"]
})
export class DicesComponent implements OnInit {

  @Input() dices: Array<number>;
  constructor() {

  }

  ngOnInit() {}


}
