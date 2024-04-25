import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    products:any = [
      {image:'../../../assets/images/home/Olevs-8697-Tungsten-Steel-Copper-Dial-Ladies-Watch-Gold-1.jpg', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00'},
      {image:'../../../assets/images/home/6JqNIG41Citz4GZwhiotfOYPxJXqIeexdj3ZHtIM.jpg', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00'},      
      {image:'../../../assets/images/home/Screenshot_5.jpg', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00'},
      {image:'../../../assets/images/home/OLEVS-5877-Ladies-Watch-Women.jpg', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00'},      
      {image:'../../../assets/images/home/s-l1200.webp', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00'},
      {image:'../../../assets/images/home/Carlington_elite_analog_ladies_watch_CT_2007_roseblack.webp', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00'},      
      {image:'../../../assets/images/home/1601128362583-13-originnm80prcnt-500x500.webp', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00'},
      {image:'../../../assets/images/home/9bfd9ddf926cc999dc4c4f7dbad7ff63.jpg', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00'}      
    ]
    }
