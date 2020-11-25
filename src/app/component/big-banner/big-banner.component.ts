import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-big-banner',
  templateUrl: './big-banner.component.html',
  styleUrls: ['./big-banner.component.scss']
})
export class BigBannerComponent implements OnInit {

  bigBanner:any;

  constructor(
    private commonService: CommonService
  ) {



  }

  ngOnInit() {
    this.getBigBanner();
  }

  getBigBanner(){
    this.commonService.getBigBanner().subscribe( resp => {
      this.bigBanner =  resp;
      console.log('BIG BANNER', {
        'this.bigBanner': this.bigBanner[0].Image
      });
    });
  }
}
