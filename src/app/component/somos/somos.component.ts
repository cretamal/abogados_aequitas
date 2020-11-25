import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-somos',
  templateUrl: './somos.component.html',
  styleUrls: ['./somos.component.scss']
})
export class SomosComponent implements OnInit {

  somos:any;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(){
    this.commonService.getPost('somos').subscribe( resp => {
      this.somos =  resp;
      console.log('this.post', this.somos[0].Image[0].url);
    });
  }


}
