import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { FooterComponent } from './components/layout/footer/footer.component';
import { IntroComponent } from './components/home-page/intro/intro.component';
import { FeaturesComponent } from './components/home-page/features/features.component';
import { FeedbackComponent } from './components/home-page/feedback/feedback.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/UI/spinner/spinner.component';
import { UserBadgeComponent } from './components/UI/user-badge/user-badge.component';

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
    DetailsComponent,
    FooterComponent,
    IntroComponent,
    FeaturesComponent,
    FeedbackComponent,
    SpinnerComponent,
    UserBadgeComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
