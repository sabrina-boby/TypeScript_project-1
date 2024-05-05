import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { CopyrightSecModule } from 'src/app/shared/components/copyright-sec/copyright-sec.module';
import { InformationSecComponent } from './information-sec/information-sec.component';
import { QuoteComponent } from './quote/quote.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { ContactModule } from './contact/contact.module';


@NgModule({
  declarations: [
    AboutUsComponent,
    ChatBotComponent,
    InformationSecComponent,
    QuoteComponent,
    AskQuestionComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    FooterModule,
    CopyrightSecModule,
    ContactModule
  ]
})
export class AboutUsModule { }
