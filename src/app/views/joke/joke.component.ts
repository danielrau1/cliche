import { Component, OnInit } from '@angular/core';
import {JokeTellerService} from '../../models/joke-teller.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
joke: string;

  constructor(private dad: JokeTellerService) { }

  ngOnInit() {
    this.dad.tellJoke().subscribe(res => {
      this.joke = res.joke;
      }

    );
  }

}

