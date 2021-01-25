import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoremComponent} from './lorem/lorem.component';
import {StudlistComponent} from './studlist/studlist.component';
import {EditorComponent} from './editor/editor.component';

const routes: Routes = [
  {path: '', component: LoremComponent},
  {path: 'list', component: StudlistComponent},
  {path: 'editor', component: EditorComponent},
  {path: 'editstud/:id', component: EditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
