import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeVideoComponent } from './home/home-video/home-video.component';
import { HomeReviewComponent } from './home/home-review/home-review.component';
import { HomeRecommendComponent } from './home/home-recommend/home-recommend.component';
import { FoodComponent } from './pension-service/food/food.component';
import { DividerComponent } from './divider/divider.component';
import { HomeYoutubeComponent } from './home/home-youtube/home-youtube.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StoryComponent } from './story/story.component';
import { RoomComponent } from './pension-service/room/room.component';
import { MoveTopIconComponent } from './move-top-icon/move-top-icon.component';
import { FlatBenchComponent } from './pension-service/flat-bench/flat-bench.component';
import { ReservationModuleModule } from 'reservation/reservation-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeVideoComponent,
    HomeReviewComponent,
    HomeRecommendComponent,
    HomeYoutubeComponent,
    FoodComponent,
    FlatBenchComponent,
    DividerComponent,
    FooterComponent,
    HeaderComponent,
    StoryComponent,
    RoomComponent,
    MoveTopIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    YouTubePlayerModule,
    CommonModule,
    ReservationModuleModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
