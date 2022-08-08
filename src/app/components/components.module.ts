import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderViviComponent } from './header-vivi/header-vivi.component';
import { OptionListComponent } from './option-list/option-list.component';
import { VoiceCommandComponent } from './voice-command/voice-command.component';
import { MatButtonModule } from '@angular/material/button';
import { ListReceiverComponent } from './list-receiver/list-receiver.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { TransactionResumeComponent } from './transaction-resume/transaction-resume.component';

@NgModule({
  declarations: [
    HeaderViviComponent,
    OptionListComponent,
    VoiceCommandComponent,
    ListReceiverComponent,
    ListProductsComponent,
    TransactionResumeComponent
  ],
  imports: [CommonModule, MatButtonModule],
  exports: [HeaderViviComponent, OptionListComponent,VoiceCommandComponent,ListReceiverComponent],
})
export class ComponentsModule {}
