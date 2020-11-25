import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-bar-services',
  templateUrl: './bar-services.component.html',
  styleUrls: ['./bar-services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarServicesComponent implements OnInit {
  typeServices:any;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getTypeServices();
  }

  getTypeServices(){
    this.commonService.getTypeServices().subscribe( resp => {
      this.typeServices =  resp;
      console.log('this.typeServices', this.typeServices);
    });
  }

}
