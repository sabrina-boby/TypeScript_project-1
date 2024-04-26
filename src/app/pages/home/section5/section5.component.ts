import { Component } from '@angular/core';
import { SECTION5_DB } from 'src/app/core/db/section5.db';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.scss']
})

export class Section5Component {
  img_gellary: any[] = SECTION5_DB;
}