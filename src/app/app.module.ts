import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TodoModule} from "./todos/todo.module";
import { FooterComponent } from './footer/footer.component';
import {environment} from "../environments/environment";

// Ngrx
import {StoreModule} from "@ngrx/store";
import {todoReducer} from "./todos/todo.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todos: todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
