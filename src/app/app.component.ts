import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
activatedButton = false
  private activatedSubscription: Subscription

  constructor(private userService:UserService) {}

  ngOnInit() {
    this.activatedSubscription= this.userService.activatedEmitter.subscribe((wasActivated) => {
    this.activatedButton = wasActivated;
  })
  }

  ngOnDestroy() {
    this.activatedSubscription.unsubscribe()
  }

}
