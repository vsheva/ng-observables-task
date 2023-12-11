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
          observer.next(count); //!!
          // if(count===2) {
          //   observer.complete();}

          if(count>3) {
            observer.error( new Error('Count is grater then 3!'))
          }

          if(count===7) {
            observer.complete();
          }

          count++
        },1000)
      }
    )

    this.firstObservableSubs= customObservable.subscribe(
      (data)=>console.log(data),
      (error)=>{
        alert(error.message)
        console.log(error.message)},
      ()=>{
        console.log("Completed!")
      }
      )


  }

  ngOnDestroy() {
    this.firstObservableSubs.unsubscribe()
  }

}
