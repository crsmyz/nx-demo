import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from '@to-do-app/button';

import { AppComponent } from './app.component';
// import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [ButtonComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
