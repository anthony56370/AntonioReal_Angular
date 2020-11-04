import { Component, NgModule, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Joke } from '../joke-component/joke-component.component';
  
@Component({
  selector: 'joke-form',
  templateUrl: './joke-form-component.component.html',
  styleUrls: ['./joke-form-component.component.css']
})
export class JokeFormComponentComponent{

  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {

    this.jokeCreated.emit(new Joke(setup, punchline));

  }

}
