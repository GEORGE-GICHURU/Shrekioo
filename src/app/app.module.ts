// @ts-nocheck
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserService } from './user.service';
import { RepositoryService } from './repository.service';
import { NavbarComponent } from './navbar/navbar.component';

import { DatePipe } from './date.pipe';
import { SearchComponent } from './search/search.component';
import { PageComponent } from './page/page.component';
import { RepositoryComponent } from './repository/repository.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatePipe,
    SearchComponent,
    PageComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
