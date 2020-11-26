import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-leyenda-servicios',
  templateUrl: './leyenda-servicios.component.html',
  styleUrls: ['./leyenda-servicios.component.scss']
})
export class LeyendaServiciosComponent implements OnInit {
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
