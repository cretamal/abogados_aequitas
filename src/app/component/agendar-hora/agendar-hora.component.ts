import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-agendar-hora',
  templateUrl: './agendar-hora.component.html',
  styleUrls: ['./agendar-hora.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AgendarHoraComponent implements OnInit {
  dataForm:FormGroup;
  legalMatters:any;
  constructor(
    private commonService: CommonService,
    private fb: FormBuilder) {
      // DATAFORM STEP1
      this.dataForm = this.fb.group( {
        name: ['', [Validators.required] ],
        rut: ['', [Validators.required] ],
        scheduletime: ['', [Validators.required] ],
        email: ['', [Validators.required] ],
        phone: ['', [Validators.required] ],
        legalMatter: ['', [Validators.required] ],
        comment: ['', [Validators.required] ],
      });


      this.legalMatters = [
        {id:0, name: 'Defensa Familiar'},
        {id:1, name: 'Defensa Civil'},
        {id:2, name: 'Defensa Laboral'}
      ]
    }

  ngOnInit() {
  }

  contacto(){
    const data = {
      "to": "cretamal.dev@gmail.com",
      "subject": "Test sendGrid strapi",
      "text": "Hello world!",
      "html": `<body style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;Margin:0;background:#fff!important;box-sizing:border-box;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;min-width:100%;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;width:100%!important"> <span class="preheader" style="color:#fefefe;display:none!important;font-size:1px;line-height:1px;max-height:0;max-width:0;mso-hide:all!important;opacity:0;overflow:hidden;visibility:hidden"></span><table class="body" style="Margin:0;background:#fff!important;border-collapse:collapse;border-spacing:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;height:100%;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:100%"><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><td class="center" align="center" valign="top" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word"><center style="min-width:640px;width:100%"><table align="center" class="container float-center" style="Margin:0 auto;background:#fefefe;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:center;vertical-align:top;width:640px"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><td style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word"><table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;position:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><th class="small-12 large-12 columns first last" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0 auto;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0 auto;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:640px;word-wrap:break-word"><table style="border-collapse:collapse;border-spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><th style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word"><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left">El señor ${this.dataForm.controls['name'].value} con Email: [${this.dataForm.controls['email'].value}], Quiere que se contacten para agendar el siguiente Día ${this.dataForm.controls['scheduletime'].value}.</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left">Saluda Atte. Admin Aequitas</p></th><th class="expander" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0!important;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;visibility:hidden;width:0;word-wrap:break-word"></th></tr></tbody></table></th></tr></tbody></table></td></tr></tbody></table></center></td></tr></table><div style="display:none;white-space:nowrap;font:15px courier;line-height:0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>`
    };

    console.log('data form controls', data );

    // this.commonService.postEmail(data).subscribe( resp => {
    //   console.log('resp send email', resp);
    // });
  }

}
