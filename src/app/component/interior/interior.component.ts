import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.scss']
})
export class InteriorComponent implements OnInit {
  infoPage:any;
  idParamRoute:any;
  constructor(
    private commonService: CommonService,
    private activateRoute: ActivatedRoute,
  ) {
    this.idParamRoute = this.activateRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    console.log('this.idParamRoute', this.idParamRoute);
    this.getPost(this.idParamRoute);
  }
  getPost(category){
    this.commonService.getPost(category).subscribe( resp => {
      this.infoPage =  resp;
      console.log('this.infoPage:', this.infoPage);
    });
  }

}
