import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { TechComponent } from './components/tech/tech.component';
import { WorkComponent } from './components/work/work.component';
import { TechCloudComponent } from './components/tech/tech-cloud/tech-cloud.component';
import { TechWebComponent } from './components/tech/tech-web/tech-web.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    TechComponent,
    WorkComponent,
    TechCloudComponent,
    TechWebComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
