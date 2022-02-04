import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { PendingChangesGuard } from './pending-changes.guard';
export const MY_ROUTES: Routes = [
  {
    path: 'app',
    component: AppComponent,
    canDeactivate: [PendingChangesGuard],
  },
  {
    path: 'hello',
    component: HelloComponent,
    canDeactivate: [PendingChangesGuard],
  },
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(MY_ROUTES)],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [PendingChangesGuard],
})
export class AppModule {}
