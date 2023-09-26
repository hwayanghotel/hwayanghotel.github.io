import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { YouTubePlayerModule } from '@angular/youtube-player';
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
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { HolidayService } from 'reservation/service/holiday.service';
import { DBService } from 'reservation/service/DB.service';
import { ReservationService } from 'reservation/service/reservation.service';
import {
    DateAdapter,
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE,
    MatNativeDateModule,
} from '@angular/material/core';
import {
    MAT_MOMENT_DATE_ADAPTER_OPTIONS,
    MomentDateAdapter,
} from '@angular/material-moment-adapter';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
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
import { ManagerComponent } from 'manager/manager/manager.component';
import { ManagerCalendarComponent } from 'manager/manager-calendar/manager-calendar.component';
import { ManagerTableComponent } from 'manager/manager-table/manager-table.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ManagerService } from 'manager/manager.service';
import { UploaderService } from 'reservation/service/uploader.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LinkTreeComponent } from './link-tree/link-tree.component';
import { ManagerWeeklyCalendarComponent } from 'manager/manager-weekly-calendar/manager-weekly-calendar.component';
import { LandingComponent } from './landing/mobile/landing.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';

@NgModule({
    declarations: [
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
        ManagerComponent,
        ManagerCalendarComponent,
        ManagerTableComponent,
        ManagerWeeklyCalendarComponent,
        LinkTreeComponent,
        LandingComponent,
        MenuComponent,
        LocationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        YouTubePlayerModule,
        CommonModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        HttpClientModule,
        MatDialogModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        MatSortModule,
        MatTabsModule,
        MatIconModule,
        MatSelectModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        MatCardModule,
        MatMenuModule,
        MatRippleModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        UploaderService,
        HolidayService,
        DBService,
        ReservationService,
        ManagerService,
        DatePipe,
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
                display: {
                    dateInput: 'YY.MM.DD',
                    monthYearLabel: 'YY.MM.DD',
                },
            },
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
