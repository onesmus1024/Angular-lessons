import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleTodoComponent } from './todo-list/single-todo/single-todo.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        AppComponent,
        SingleTodoComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavBarComponent
    ]
})
export class AppModule { }
