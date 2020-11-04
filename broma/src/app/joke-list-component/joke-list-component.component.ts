import { Component, NgModule, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Joke } from '../joke-component/joke-component.component';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list-component.component.html',
  styleUrls: ['./joke-list-component.component.css']
})

export class JokeListComponentComponent{

  jokes : Joke[];

  constructor() { 

      //Rellena el array con bromas

      this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hellome(Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?","Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
      ];  

  }

  //Añadir nueva broma al array   

  addJoke(joke) {
    this.jokes.unshift(joke);
  }

}
