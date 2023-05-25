import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeVideoComponent,
    HomeReviewComponent,
    HomeRecommendComponent,
    HomeYoutubeComponent,
    FoodComponent,
    DividerComponent,
    FooterComponent,
    HeaderComponent,
    StoryComponent,
    RoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    YouTubePlayerModule,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
