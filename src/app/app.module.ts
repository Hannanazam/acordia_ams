import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeadOfficeComponent } from './head-office/head-office.component';
import { HeadOfficeModule } from './head-office/head-office.module';
import { AuditControlModule } from './audit-control/audit-control.module';
import { AuditControlComponent } from './audit-control/audit-control.component';
import { SmetaModule } from './smeta/smeta.module';
import { SmetaComponent } from './smeta/smeta.component';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponent/about/about.component';
import { WrapComponent } from './wrap/wrap.component';
import { WrapModule } from './wrap/wrap.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeadOfficeComponent,
    AuditControlComponent,
    SmetaComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    WrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    HeadOfficeModule,
    AuditControlModule,
    SmetaModule,
    FormsModule,
    WrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
