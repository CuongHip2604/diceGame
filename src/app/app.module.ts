import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { ControlsComponent } from './components/controls/controls.component';
import { DicesComponent } from './components/dices/dices.component';
import { PopapRulesComponent } from './components/popap-rules/popap-rules.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ControlsComponent,
    DicesComponent,
    PopapRulesComponent
  ],
  imports: [
    BrowserModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
