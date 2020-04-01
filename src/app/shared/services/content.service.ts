import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  homeString = new String("Here at SquadFit we strive to help you meet your fitness goals!\n\n\n\nWe match you to workouts that will suit your fitness level, goals and schedule.");  

  pages: Object = {
    'home': {title: 'Welcome to SquadFit!', subtitle: 'What we\'re about:', content: this.homeString, image: 'assets/bg00.jpg'},
    'about': {title: 'About', subtitle: 'How does it work?', content: 'You give us basic information about yourself and we assign you to a squad/ group that best suits your exercise experience and goals. We assign you tasks tailor made for your ability. When you complete a task you mark it as complete and earn points. You can then compare your progress against the people in your squad.', image: 'assets/bg01.jpg'},
    'contact': {title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', image: 'assets/bg02.jpg'} 
  };

  constructor() { }
}
