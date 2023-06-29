import { CUSTOM_ELEMENTS_SCHEMA, NgModule, forwardRef } from '@angular/core';
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
import { FormFieldCustomControlExample } from 'reservation/reservation-dialog/form-field-custom-control-example/form-field-custom-control-example.component';
import { ReservationComponent } from 'reservation/reservation/reservation.component';
import { CalendarComponent } from 'reservation/calendar/calendar.component';
import { ContentFoodComponent } from 'reservation/calendar/content-food/content-food.component';
import { ContentFlatBenchComponent } from 'reservation/calendar/content-flat-bench/content-flat-bench.component';
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
import { ManagerContentFlatBenchComponent } from 'manager/manager-calendar/manager-content-flat-bench/manager-content-flat-bench.component';
import { ManagerContentFoodComponent } from 'manager/manager-calendar/manager-content-food/manager-content-food.component';
import { ManagerTableComponent } from 'manager/manager-table/manager-table.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ManagerService } from 'manager/manager.service';

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
    ReservationComponent,
    CalendarComponent,
    ContentFoodComponent,
    ContentFlatBenchComponent,
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
    ManagerContentFlatBenchComponent,
    ManagerContentFoodComponent,
    ManagerTableComponent,
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
    forwardRef(() => FormFieldCustomControlExample),
    MatCardModule,
    MatMenuModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
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
