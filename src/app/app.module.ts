import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { BadgeComponent } from './components/UI/badge/badge.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { SeenlistComponent } from './pages/seenlist/seenlist.component';
import { DatabaseComponent } from './pages/database/database.component';
import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BadgeComponent,
    WatchlistComponent,
    SeenlistComponent,
    DatabaseComponent,
    HomeComponent,
    ExploreComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
