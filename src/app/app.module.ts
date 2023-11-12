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
import { HeaderComponent } from './header/header.component';
import { StoryComponent } from './story/story.component';
import { RoomComponent } from './room/room.component';
import { MoveTopIconComponent } from './move-top-icon/move-top-icon.component';
import { FlatBenchComponent } from './flat-bench/flat-bench.component';
import { environment } from '../environments/environment';
import { LinkTreeComponent } from './link-tree/link-tree.component';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';
// RESERVATION
import { ReservationComponent } from 'reservation/reservation/reservation.component';
import { CalendarComponent } from 'reservation/calendar/calendar.component';
import { ReservationDialogComponent } from 'reservation/reservation-dialog/reservation-dialog.component';
import { DialogForTypeAndDateComponent } from 'reservation/reservation-dialog/dialog-for-type-and-date/dialog-for-type-and-date.component';
import { DialogForCustomerInfoComponent } from 'reservation/reservation-dialog/dialog-for-customer-info/dialog-for-customer-info.component';
import { DialogForFlatbenchComponent } from 'reservation/reservation-dialog/dialog-for-flatbench/dialog-for-flatbench.component';
import { DialogForFoodComponent } from 'reservation/reservation-dialog/dialog-for-food/dialog-for-food.component';
import { DialogForCarAndMemoComponent } from 'reservation/reservation-dialog/dialog-for-car-and-memo/dialog-for-car-and-memo.component';
import { DialogForReservationConfirmationComponent } from 'reservation/reservation-dialog/dialog-for-reservation-confirmation/dialog-for-reservation-confirmation.component';
import { DialogReservationCancelComponent } from 'reservation/reservation-dialog/dialog-reservation-cancel/dialog-reservation-cancel.component';
import { SearchBookingComponent } from 'reservation/search-booking/search-booking.component';
import { InputInfoDialogComponent } from 'reservation/search-booking/input-info-dialog/input-info-dialog.component';
import { BookingListDialogComponent } from 'reservation/search-booking/booking-list-dialog/booking-list-dialog.component';
import { HolidayService } from 'reservation/service/holiday/holiday.service';
import { DBService } from 'reservation/service/DB.service';
import { ReservationService } from 'reservation/service/reservation.service';
import { UploaderService } from 'reservation/service/uploader.service';
//BOOKING
import { BookingComponent } from 'reservation/booking/booking.component';
import { BookingFlatTableComponent } from 'reservation/booking/booking-flat-table/booking-flat-table.component';
import { BookingFoodComponent } from 'reservation/booking/booking-food/booking-food.component';
import { BookingNumberGuestComponent } from 'reservation/booking/booking-number-guest/booking-number-guest.component';
import { BookingDateComponent } from 'reservation/booking/booking-date/booking-date.component';
import { BookingDateForFoodComponent } from 'reservation/booking/booking-date/booking-date-for-food/booking-date-for-food.component';
import { BookingDateForFlatTableComponent } from 'reservation/booking/booking-date/booking-date-for-flat-table/booking-date-for-flat-table.component';
import { BookingSelectFoodComponent } from 'reservation/booking/booking-select-food/booking-select-food.component';
import { BookingExtraInfoComponent } from 'reservation/booking/booking-extra-info/booking-extra-info.component';
import { BookingConfirmedComponent } from 'reservation/booking/booking-confirmed/booking-confirmed.component';
import { BookingSearchComponent } from 'reservation/booking/booking-search/booking-search.component';
import { BookingService } from 'reservation/service/booking/booking.service';

// MANAGER
import { ManagerComponent } from 'manager/manager/manager.component';
import { ManagerCalendarComponent } from 'manager/manager-calendar/manager-calendar.component';
import { ManagerTableComponent } from 'manager/manager-table/manager-table.component';
import { ManagerService } from 'manager/manager.service';
import { ManagerWeeklyCalendarComponent } from 'manager/manager-weekly-calendar/manager-weekly-calendar.component';
// ETC
import { MaterialModule } from './material.module';

const Components = [
    AppComponent,
    HomeComponent,
    HomeVideoComponent,
    HomeReviewComponent,
    HomeYoutubeComponent,
    FoodComponent,
    FlatBenchComponent,
    DividerComponent,
    FooterComponent,
    HeaderComponent,
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
    BookingExtraInfoComponent,
    BookingConfirmedComponent,
];

const ReservationComponents = [
    ReservationComponent,
    CalendarComponent,
    ReservationDialogComponent,
    DialogForTypeAndDateComponent,
    DialogForCustomerInfoComponent,
    DialogForFlatbenchComponent,
    DialogForFoodComponent,
    DialogForCarAndMemoComponent,
    DialogForReservationConfirmationComponent,
    DialogReservationCancelComponent,
    SearchBookingComponent,
    InputInfoDialogComponent,
    BookingListDialogComponent,
];

const ManagerComponents = [
    ManagerComponent,
    ManagerCalendarComponent,
    ManagerTableComponent,
    ManagerWeeklyCalendarComponent,
    LinkTreeComponent,
];

@NgModule({
    declarations: [
        ...Components,
        ...ReservationComponents,
        ...BookingComponents,
        ...ManagerComponents,
    ],
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
        UploaderService,
        HolidayService,
        DBService,
        ReservationService,
        ManagerService,
        //신규
        BookingService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
