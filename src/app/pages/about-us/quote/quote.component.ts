import { Component } from '@angular/core';
import { QUOTE_DB } from 'src/app/core/db/quote.db';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
    items: any[] = QUOTE_DB;
}
