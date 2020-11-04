import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeComponentComponent } from './joke-component/joke-component.component';
import { JokeFormComponentComponent } from './joke-form-component/joke-form-component.component';
import { JokeListComponentComponent } from './joke-list-component/joke-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponentComponent,
    JokeFormComponentComponent,
    JokeListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


