import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlatBenchComponent } from './flat-bench/flat-bench.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { RoomComponent } from './room/room.component';
import { ManagerComponent } from 'manager/manager/manager.component';
import { ReservationComponent } from 'reservation/reservation/reservation.component';
import { LinkTreeComponent } from './link-tree/link-tree.component';
import { LandingComponent } from './landing/landing.component';
import { LocationComponent } from './location/location.component';
import { BookingFlatTableComponent } from 'reservation/booking/booking-flat-table/booking-flat-table.component';
import { BookingFoodComponent } from 'reservation/booking/booking-food/booking-food.component';

const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'home', component: HomeComponent },
    { path: 'food', component: FoodComponent },
    { path: 'flat-bench', component: FlatBenchComponent },
    { path: 'story', component: StoryComponent },
    { path: 'room', component: RoomComponent },
    { path: 'reservation', component: ReservationComponent },
    { path: 'manager', component: ManagerComponent },
    { path: 'link-tree', component: LinkTreeComponent },
    { path: 'location', component: LocationComponent },
    { path: 'booking-flat-bench', component: BookingFlatTableComponent },
    { path: 'booking-food', component: BookingFoodComponent },
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
