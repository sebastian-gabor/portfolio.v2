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
import { WebCloudOptionComponent } from './components/web-cloud-option/web-cloud-option.component';
import { ProjectComponent } from './components/work/project/project.component';
import { WebProjectsComponent } from './components/work/web-projects/web-projects.component';
import { CloudProjectsComponent } from './components/work/cloud-projects/cloud-projects.component';

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
    WebCloudOptionComponent,
    ProjectComponent,
    WebProjectsComponent,
    CloudProjectsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
