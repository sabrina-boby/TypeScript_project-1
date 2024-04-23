import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    products:any = [
      {image:'../../../assets/images/home/Frame 1000008716 (1).png', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00'},
      {image:'../../../assets/images/home/Frame 1000008716 (1).png', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00'},      {image:'../../../assets/images/home/Frame 1000008716 (1).png', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00',rating:'../../../assets/images/brand/png/star.png',store:'../../../assets/images/brand/png/store.png' },
      {image:'../../../assets/images/home/Frame 1000008716 (1).png', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00'},      {image:'../../../assets/images/home/Frame 1000008716 (1).png', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00',rating:'../../../assets/images/brand/png/star.png',store:'../../../assets/images/brand/png/store.png' },
      {image:'../../../assets/images/home/Frame 1000008716 (1).png', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00'},      {image:'../../../assets/images/home/Frame 1000008716 (1).png', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00',rating:'../../../assets/images/brand/png/star.png',store:'../../../assets/images/brand/png/store.png' },
      {image:'../../../assets/images/home/Frame 1000008716 (1).png', name:'Bollard Lamp',nPrice:'$7.00',oPrice:'$12.00'}      ]
    }
