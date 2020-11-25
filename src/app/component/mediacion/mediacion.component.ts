import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-mediacion',
  templateUrl: './mediacion.component.html',
  styleUrls: ['./mediacion.component.scss']
})
export class MediacionComponent implements OnInit {
  mediacion:any;
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getPost();
  }
  getPost(){
    this.commonService.getPost('quees').subscribe( resp => {
      this.mediacion =  resp;
      console.log('this.post', this.mediacion);
    });
  }

}
