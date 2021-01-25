import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoremComponent } from './lorem/lorem.component';
import { StudlistComponent } from './studlist/studlist.component';
import { EditorComponent } from './editor/editor.component';

//Модули
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudFilterComponent } from './stud-filter/stud-filter.component';
import { StudpipePipe } from './pipes/studpipe.pipe';
import {FilterPipeModule} from 'ngx-filter-pipe'





@NgModule({
  declarations: [
    AppComponent,
    LoremComponent,
    StudlistComponent,
    EditorComponent,
    StudFilterComponent,
    StudpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
