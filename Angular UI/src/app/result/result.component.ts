import { Component, OnInit, Input } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  clickEventSubscription: Subscription;
  @Input() public data: any;
  isShow = false;
  constructor(private service: AppServiceService) {
    this.clickEventSubscription = this.service.getClickEvent().subscribe(() => {
      this.clickTrigger();
    })
  }

  ngOnInit(): void {

  }
  clickTrigger() {
    if (this.data == 0) {
      alert("Flight number is wrong")
      this.isShow = false;
    } else {
      this.isShow = !this.isShow;
    }
  }

}
