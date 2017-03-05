import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Reminder } from '../../classes/reminder';
import { AngularFire } from 'angularfire2';
import { LoadingController } from 'ionic-angular';


/*
  Generated class for the AddReminder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-reminder',
  templateUrl: 'add-reminder.html'
})
export class AddReminderPage {

  reminder: Reminder = new Reminder();
  avatarRows=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public af: AngularFire, public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReminderPage');

    var row1 = {
      value:[
        "assets/images/backpack.png",
        "assets/images/ball.png",
        "assets/images/basketball.png",
        "assets/images/bear.png",
        "assets/images/throphy.png",
        "assets/images/book.png"]
    };

  var row2 = {
      value:[
        "assets/images/box.png",
        "assets/images/cake.png",
        "assets/images/camera.png",
        "assets/images/cat.png",
        "assets/images/clock.png",
        "assets/images/cloud.png"]
    };
    var row3 = {
      value:[
        "assets/images/game.png",
        "assets/images/gift.png",
        "assets/images/graduation.png",
        "assets/images/mastercard.png",
        "assets/images/movie.png",
        "assets/images/rainbow.png"]
    };

    var row4 = {
      value:[
        "assets/images/rice.png",
        "assets/images/spaghetti.png",
        "assets/images/speech-bubble.png",
        "assets/images/sun.png",
        "assets/images/syringe.png",
        "assets/images/throphy.png"]
    };



    this.avatarRows.push(row1);
    this.avatarRows.push(row2);
    this.avatarRows.push(row3);
    this.avatarRows.push(row4);
    
    
  }

  createReminder(){
    console.log(this.reminder);
/*
    if(!this.reminder.hadDuration){
      let today = new Date();
      this.reminder.date = today.getFullYear+"-"+(today.getMonth()+1)+"-"+today.getDate();
      this.reminder.time = "00:00";
    }
*/
    // create the loader to display
    let loader = this.loadingCtrl.create({
      content: "Please wait ...",
    })

    // display loader
    loader.present();

    // get reminders list
    let reminderList = this.af.database.list("/reminders"); // list = table
    
    // push the new reminder
    //reminderList.push(this.reminder).then(this.function_name()); call function_name
    reminderList.push(this.reminder).then(()=>{
      console.log("push completed");
      loader.dismiss();
      this.navCtrl.pop();


    },
    (erorr)=>{

      loader.dismiss();
      console.log(erorr);
      this.navCtrl.pop();
      
    });


  }

  updateAvatar(path: string){
    this.reminder.avatar = path;
  }



}
