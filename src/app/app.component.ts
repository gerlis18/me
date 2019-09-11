import { Component } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Social} from "./interfaces/social";
import {Intro} from "./interfaces/intro";
import {Skill} from "./interfaces/skill";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  intro: Intro;
  social: Social;
  skills: Skill[];

  constructor(db: AngularFirestore) {
    db.collection('portfolio')
      .valueChanges()
      .subscribe((res: any) => {
        const data = res[0];
        this.skills = data.skills;
        this.intro = data.intro;
        this.social = data.social;
      })
  }
}
