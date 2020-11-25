import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  servicios:any;
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(){
    this.commonService.getPost('servicios').subscribe( resp => {
      this.servicios =  resp;
      console.log('this.post', this.servicios);
    });
  }

}
