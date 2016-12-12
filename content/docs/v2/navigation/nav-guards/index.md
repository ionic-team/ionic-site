---
layout: v2_fluid/docs_base
category: navigation
id: nav_guards
title: Navigation - Nav Guards
header_sub_title: Ionic Navigation
---

 ## Nav Guards
 
 In some cases, a developer should be able to control views leaving and entering. To allow for this, NavController has the `ionViewCanEnter` and `ionViewCanLeave` methods.
 Similar to Angular 2 route guards, but are more integrated with NavController. For example, if you wanted to prevent a user from leaving a view:
 
 ```ts
 export class MyClass{
  constructor(
    public navCtrl: NavController
   ){}
 
   pushPage(){
     this.navCtrl.push(DetailPage)
      .catch(()=> console.log('should I stay or should I go now'))
   }
 
   ionViewCanLeave(): boolean{
    // here we can either return true or false
    // depending on if we want to leave this view
    if(isValid(randomValue)){
       return true;
     } else {
       return false;
     }
   }
 }
 ```
 
 We need to make sure that or `navCtrl.push` has a catch in order to catch the and handle the error.
 If you need to prevent a view from entering, you can do the same thing
 
 ```ts
 export class MyClass{
  constructor(
    public navCtrl: NavController
   ){}
 
   pushPage(){
     this.navCtrl.push(DetailPage)
      .catch(()=> console.log('should I stay or should I go now'))
   }
 
 }
 
 export class DetailPage(){
   constructor(
     public navCtrl: NavController
   ){}
   ionViewCanEnter(): boolean{
    // here we can either return true or false
    // depending on if we want to leave this view
    if(isValid(randomValue)){
       return true;
     } else {
       return false;
     }
   }
 }
 ```
 
 Similar to `ionViewCanLeave` we still need a catch on the original `navCtrl.push` in order to handle it properly.
 When handling the back button in the `ion-navbar`, the catch is already taken care of for you by the framework.