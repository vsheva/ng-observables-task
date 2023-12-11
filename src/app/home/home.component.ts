import { Component, OnInit } from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private firstObservableSubs: Subscription

  constructor() { }

  ngOnInit() {
  /* this.firstObservableSubs= interval(1000).subscribe(
      (count)=>{
      console.log(count)
      }
    )*/

    const customObservable = new Observable(
      (observer) => {
        let count = 0;

        setInterval(()=>{
          observer.next(count);
          count++
        },1000)
      }
    )

    this.firstObservableSubs= customObservable.subscribe((data)=>console.log(data))


  }

  ngOnDestroy() {
    this.firstObservableSubs.unsubscribe()
  }

}
