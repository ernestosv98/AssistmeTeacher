import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { auth } from 'firebase';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-petition-modal',
  templateUrl: './petition-modal.page.html',
  styleUrls: ['./petition-modal.page.scss'],
})
export class PetitionModalPage implements OnInit {

  constructor(  private authService : AuthService,
                private userService : UserService,
                private modalCtrl   : ModalController ) { }

  petitions = [];

  user = [];
  test : any;

  ngOnInit() {
    this.getPetitions()

    console.log(this.test)
  }

  getPetitions() {
    this.userService.getUser(this.authService.GetID()).subscribe((user) =>{
      this.user.push(user);
    });
  }

  deletePetition(index){
    this.user[0].petitions.slice(index, 1);
    this.userService.updateUser(this.user[0].id, this.user[0])
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }



}
