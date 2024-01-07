import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlatTableComponent } from './flat-table/flat-table.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { RoomComponent } from './room/room.component';
import { LandingComponent } from './landing/landing.component';
import { LocationComponent } from './location/location.component';
import { BookingFlatTableComponent } from 'reservation/booking/booking-flat-table/booking-flat-table.component';
import { BookingFoodComponent } from 'reservation/booking/booking-food/booking-food.component';
import { BookingSearchComponent } from 'reservation/booking/booking-search/booking-search.component';
import { BookingParkingComponent } from 'reservation/booking/booking-parking/booking-parking.component';
import { BookingConfirmedComponent } from 'reservation/booking/booking-confirmed/booking-confirmed.component';

const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'home', component: HomeComponent },
    { path: 'food', component: FoodComponent },
    { path: 'flat-table', component: FlatTableComponent },
    { path: 'story', component: StoryComponent },
    { path: 'room', component: RoomComponent },
    { path: 'location', component: LocationComponent },
    { path: 'booking-flat-table', component: BookingFlatTableComponent },
    { path: 'booking-food', component: BookingFoodComponent },
    { path: 'booking-search', component: BookingSearchComponent },
    { path: 'booking-confirmed', component: BookingConfirmedComponent },
    { path: 'booking-parking', component: BookingParkingComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            scrollPositionRestoration: 'top',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
