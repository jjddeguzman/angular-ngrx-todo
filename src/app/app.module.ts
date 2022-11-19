import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonComponent } from './components/button/button.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { DeleteComponent } from './components/delete/delete.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './state/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todo.effects';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    StoreModule.forRoot({ todos: todoReducer }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ButtonComponent,
    ListItemComponent,
    DeleteComponent,
    LoginPageComponent,
    MainPageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
