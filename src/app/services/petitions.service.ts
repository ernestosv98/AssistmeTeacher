import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PetitionsService {

  constructor(private afs: AngularFirestore,
              private aafStorage: AngularFireStorage) { }

  async createPetition(petition : any){
    return new Promise(async (resolve, reject) => {
      try {
        const petitionID = this.afs.createId();
        petition.id = petitionID;

        
        
        await this.afs.firestore.runTransaction(async transaction => {
          const petitionRef = this.afs.doc(`petitions/${petitionID}`).ref;
          //const userRef = this.afs.doc(`users/${course.teacherID}`).ref;
          //const increment = firestore.FieldValue.increment(1);

          transaction.set(petitionRef, petition);
          //transaction.update(userRef, { postsCount: increment });
        });
      
        resolve(true);
        
      } catch (error) {
        console.log(error)
        reject(error);
      }
    });
  }
}
