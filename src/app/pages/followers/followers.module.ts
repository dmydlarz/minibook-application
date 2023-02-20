import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowersPageRoutingModule } from './followers-routing.module';

import { FollowersPage } from './followers.page';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    FollowersPageRoutingModule
  ],
  declarations: [FollowersPage]
})
export class FollowersPageModule {}
