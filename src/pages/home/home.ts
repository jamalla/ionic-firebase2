import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddReminderPage } from '../add-reminder/add-reminder'; // access the .tc file
import { AngularFire } from 'angularfire2';
import { Reminder } from '../../classes/reminder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shouldShowEmptyState = true;
  reminderList: Reminder[] = [];

  constructor(public navCtrl: NavController, public af: AngularFire) {

  }

  ionViewDidLoad() {
    let firbase_reminderList = this.af.database.list("/reminders");
/*
    firbase_reminderList.subscribe(data => 
      this.reminderList = data.map((item) => {

      let reminder = Object.assign(new Reminder(), item);
      reminder.key = item.$key;
      this.reminderList.push(reminder);
      console.log(reminder);

    }));*/
    
        firbase_reminderList.subscribe(data=>{
          console.log(data);
          this.shouldShowEmptyState = false; 
          //data.forEach(function(){});
          data.forEach((item)=>{
            let reminder = Object.assign(new Reminder(), item);
            reminder.key = item.$key;
            this.reminderList.push(reminder);
            console.log(reminder);
          });
    


  })
}

navigateToReminder() {
  /*
  if(this.shouldShowEmptyState)
    this.shouldShowEmptyState = false;
  else
    this.shouldShowEmptyState = true;
  */

  this.navCtrl.push(AddReminderPage);

}

}
