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
    let t ="";
      let newtime = '';
    switch(this.city){
      case 'Jerusalem':
        newtime = h.getHours() + ':' + h.getMinutes() + ':' + h.getSeconds();
        break;
      case 'Chicago':
        newtime = (h.getHours()-8) + ':' + h.getMinutes() + ':' + h.getSeconds();
        break;
      case 'Tokyo':
        newtime = (h.getHours()+7) + ':' + h.getMinutes() + ':' + h.getSeconds();
        break;
      case 'Moscow':
        newtime = (h.getHours()+1) + ':' + h.getMinutes() + ':' + h.getSeconds();
        break;
      case 'London':
        newtime = (h.getHours()-2) + ':' + h.getMinutes() + ':' + h.getSeconds();
        break;
      case 'NewYork':
        newtime = (h.getHours()-7) + ':' + h.getMinutes() + ':' + h.getSeconds();
        break;
    }
      // h.getHours() + ":" + h.getMinutes() + ":" + h.getSeconds();
    this.time = newtime;
  }
}
