import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactsPage } from './contacts.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { ContactsPageRoutingModule } from './contacts-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ContactsPageRoutingModule
  ],
  declarations: [ContactsPage]
})
export class ContactsPageModule {}
