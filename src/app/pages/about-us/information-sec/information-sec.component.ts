import { Component } from '@angular/core';
import { INFORMATION_SEC_db } from 'src/app/core/db/information-sec.db';

@Component({
  selector: 'app-information-sec',
  templateUrl: './information-sec.component.html',
  styleUrls: ['./information-sec.component.scss']
})
export class InformationSecComponent {
  items: any[] = INFORMATION_SEC_db;
}
