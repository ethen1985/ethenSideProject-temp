import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileNetComponent } from './tensorFlow/mobile-net/mobile-net.component';
import { TimeLineComponent } from './time-line/time-line.component';
const routes: Routes = [
  {
    path: '',
    component: MobileNetComponent
  },
  {
    path: 'timeLine',
    component: TimeLineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
