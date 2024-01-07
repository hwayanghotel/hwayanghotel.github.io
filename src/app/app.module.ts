import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //DELETE?
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// APP
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeVideoComponent } from './home/home-video/home-video.component';
import { HomeReviewComponent } from './home/home-review/home-review.component';
import { FoodComponent } from './food/food.component';
import { DividerComponent } from './divider/divider.component';
import { HomeYoutubeComponent } from './home/home-youtube/home-youtube.component';
import { FooterComponent } from './footer/footer.component';
import { StoryComponent } from './story/story.component';
import { RoomComponent } from './room/room.component';
import { MoveTopIconComponent } from './move-top-icon/move-top-icon.component';
import { FlatTableComponent } from './flat-table/flat-table.component';
import { environment } from '../environments/environment';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';
//BOOKING
import { BookingComponent } from 'reservation/booking/booking.component';
import { BookingFlatTableComponent } from 'reservation/booking/booking-flat-table/booking-flat-table.component';
import { BookingFoodComponent } from 'reservation/booking/booking-food/booking-food.component';
import { BookingNumberGuestComponent } from 'reservation/booking/booking-number-guest/booking-number-guest.component';
import { BookingDateComponent } from 'reservation/booking/booking-date/booking-date.component';
import { BookingDateForFoodComponent } from 'reservation/booking/booking-date/booking-date-for-food/booking-date-for-food.component';
import { BookingDateForFlatTableComponent } from 'reservation/booking/booking-date/booking-date-for-flat-table/booking-date-for-flat-table.component';
import { BookingSelectFoodComponent } from 'reservation/booking/booking-select-food/booking-select-food.component';
import { BookingUserInfoComponent } from 'reservation/booking/booking-user-info/booking-user-info.component';
import { BookingConfirmedComponent } from 'reservation/booking/booking-confirmed/booking-confirmed.component';
import { BookingSearchComponent } from 'reservation/booking/booking-search/booking-search.component';
import { BookingService } from 'reservation/service/booking/booking.service';
import { BookingParkingComponent } from 'reservation/booking/booking-parking/booking-parking.component';
import { HolidayService } from 'reservation/service/holiday/holiday.service';
import { CalendarService } from 'reservation/service/calendar/calendar.service';
import { MediatorService } from 'reservation/service/mediator/mediator.service';

//Admin
import { GuestListComponent } from 'admin/src/app/guest-list/guest-list.component';
import { GuestDetailComponent } from 'admin/src/app/guest-detail/guest-detail.component';
import { CalendarComponent } from 'admin/src/app/calendar/calendar.component';
import { AdminComponent } from 'admin/src/app/admin/admin.component';

//ETC
import { MaterialModule } from './material.module';

const Components = [
    AppComponent,
    HomeComponent,
    HomeVideoComponent,
    HomeReviewComponent,
    HomeYoutubeComponent,
    FoodComponent,
    FlatTableComponent,
    DividerComponent,
    FooterComponent,
    StoryComponent,
    RoomComponent,
    MoveTopIconComponent,
    LandingComponent,
    MenuComponent,
    LocationComponent,
];

const BookingComponents = [
    BookingComponent,
    BookingSearchComponent,
    BookingFlatTableComponent,
    BookingFoodComponent,
    BookingNumberGuestComponent,
    BookingDateComponent,
    BookingDateForFoodComponent,
    BookingDateForFlatTableComponent,
    BookingSelectFoodComponent,
    BookingUserInfoComponent,
    BookingConfirmedComponent,
    BookingParkingComponent,
];

const AdminComponents = [
    AdminComponent,
    GuestListComponent,
    GuestDetailComponent,
    CalendarComponent,
];

@NgModule({
    declarations: [...Components, ...AdminComponents, ...BookingComponents],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        YouTubePlayerModule,
        CommonModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        HolidayService,
        BookingService,
        CalendarService,
        MediatorService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
