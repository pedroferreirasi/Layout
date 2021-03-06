import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { OfflineUiComponent } from './offline-ui.component';
import {OfflineUIRoutes} from "./offline-ui.routing";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OfflineUIRoutes),
    SharedModule
  ],
  declarations: [OfflineUiComponent]
})
export class OfflineUiModule { }
