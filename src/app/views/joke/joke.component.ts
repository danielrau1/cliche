import {Component, EventEmitter, OnInit} from '@angular/core';
import {JokeTellerService} from '../../models/joke-teller.service';


@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent {
joke: string;

refresh: EventEmitter<null> = new EventEmitter<null>();

constructor(private dad: JokeTellerService) {
this.updateJoke();
  }

updateJoke(): void {
this.dad.tellJoke().subscribe(res => {
  this.joke = res.joke;
});
}


}

