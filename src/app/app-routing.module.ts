import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlatBenchComponent } from './pension-service/flat-bench/flat-bench.component';
import { FoodComponent } from './pension-service/food/food.component';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { RoomComponent } from './pension-service/room/room.component';
import { ManagerComponent } from 'manager/manager/manager.component';
import { ReservationComponent } from 'reservation/reservation/reservation.component';
import { LinkTreeComponent } from './link-tree/link-tree.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'food', component: FoodComponent },
    { path: 'flat-bench', component: FlatBenchComponent },
    { path: 'story', component: StoryComponent },
    { path: 'room', component: RoomComponent },
    { path: 'reservation', component: ReservationComponent },
    { path: 'manager', component: ManagerComponent },
    { path: 'link-tree', component: LinkTreeComponent },
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
