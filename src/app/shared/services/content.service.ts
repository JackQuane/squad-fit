import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  homeString = new String("Here at SquadFit we strive to help you meet your fitness goals!\n\n\n\nWe match you to workouts that will suit your fitness level, goals and schedule.");  

  pages: Object = {
    'home': {title: 'Welcome to SquadFit!', subtitle: 'What we\'re about:', content: this.homeString, image: 'assets/bg00.jpg'},
    'about': {title: 'About', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/bg01.jpg'},
    'contact': {title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', image: 'assets/bg02.jpg'} 
  };

  constructor() { }
}
