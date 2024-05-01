import { Component } from '@angular/core';
import { SECTION5_DB } from 'src/app/core/db/img_gellary.db';

@Component({
  selector: 'app-img-gellary',
  templateUrl: './img-gellary.component.html',
  styleUrls: ['./img-gellary.component.scss']
})
export class ImgGellaryComponent {
  img_gellary: any[] = SECTION5_DB;
}
