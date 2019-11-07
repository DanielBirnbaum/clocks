import { Component, OnInit,Input } from "@angular/core";

@Component({
  selector: "my-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.css"]
})
export class ClockComponent implements OnInit {
  time: string;
  @Input() city :string;
  @Input() bg: string;
  
  constructor() {
    this.setTime();
    setInterval(() => this.setTime(), 1000);

  }

  ngOnInit() {}

 

  setTime() {
    
    let h = new Date();
    let t =
      h.getHours() + ":" + h.getMinutes() + ":" + h.getSeconds();
    this.time = t;
  }
}
