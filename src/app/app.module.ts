import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { ContentComponent } from './content/content.component';
import { ContentMapComponent } from './content-map/content-map.component';
import { ContentTeamsComponent } from './content-teams/content-teams.component';
import { ShowStatus } from './show-status';
import { LoginBannerComponent } from './login-banner/login-banner.component';
import { LoginInputComponent } from './login-input/login-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSidebarComponent,
    ContentComponent,
    ContentMapComponent,
    ContentTeamsComponent,
    ShowStatus,
    LoginBannerComponent,
    LoginInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
