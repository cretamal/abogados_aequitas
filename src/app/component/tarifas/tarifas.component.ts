import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
// const fs = require('fs');
@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.scss']
})
export class TarifasComponent implements OnInit {
  tarifas:any;
  pasosAtencion:any;
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getPostTarifas();
    this.getPostPasos();
    // console.log('sgMail', sgMail);
  }

  getPostTarifas(){
    this.commonService.getPost('tarifas').subscribe( resp => {
      this.tarifas =  resp;
      console.log('this.post-this.tarifas', this.tarifas);
    });
  }

  getPostPasos(){
    this.commonService.getPost('pasos-atencion').subscribe( resp => {
      this.pasosAtencion =  resp;
      console.log('this.post-this.pasosAtencion', this.pasosAtencion[0].Image);
    });
  }





}
