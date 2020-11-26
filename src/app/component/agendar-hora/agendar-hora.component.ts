import { DatePipe } from '@angular/common';
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
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) {
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
      "to": "contacto.aequitas.abogados@gmail.com",
      "subject": "Test sendGrid strapi",
      "text": "Hello world!",
      "html": `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en" style="background:#fff!important"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width"><title></title><style>@media only screen{html{min-height:100%;background:#fefefe}}@media only screen and (max-width:640px){table.body img{width:auto;height:auto}table.body center{min-width:0!important}table.body .container{width:95%!important}table.body .columns{height:auto!important;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:0!important;padding-right:0!important}th.small-12{display:inline-block!important;width:100%!important}}</style></head><body style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;Margin:0;background:#fff!important;box-sizing:border-box;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;min-width:100%;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;width:100%!important"><span class="preheader" style="color:#fefefe;display:none!important;font-size:1px;line-height:1px;max-height:0;max-width:0;mso-hide:all!important;opacity:0;overflow:hidden;visibility:hidden"></span><table class="body" style="Margin:0;background:#fff!important;border-collapse:collapse;border-spacing:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;height:100%;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:100%"><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><td class="center" align="center" valign="top" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word"><center style="min-width:640px;width:100%"><table align="center" class="container float-center" style="Margin:0 auto;background:#fefefe;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:center;vertical-align:top;width:640px"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><td style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word"><table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;position:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><th class="header small-12 large-12 columns first last" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0 auto;background:#d40202;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0 auto;padding:15px 0 15px 0!important;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:640px;word-wrap:break-word"><table style="border-collapse:collapse;border-spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><th style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word"><img src="http://devfun.cl/aequitas/assets/img/aequitas-logo.svg" style="-ms-interpolation-mode:bicubic;clear:both;display:block;margin:0 auto 0 auto;max-width:100%;outline:0;text-decoration:none;width:auto"></th><th class="expander" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0!important;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;visibility:hidden;width:0;word-wrap:break-word"></th></tr></tbody></table></th></tr></tbody></table><table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;position:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><th class="small-12 large-12 columns first last" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0 auto;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0 auto;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:640px;word-wrap:break-word"><table style="border-collapse:collapse;border-spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><th style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word"><div class="wrapper" style="display:block;margin:0 auto 0 auto;width:90%"><table class="spacer" style="border-collapse:collapse;border-spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><td height="30" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:30px;font-weight:400;hyphens:auto;line-height:30px;margin:0;mso-line-height-rule:exactly;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word">&nbsp;</td></tr></tbody></table><p class="titulo" style="Margin:0;Margin-bottom:10px;color:#0a0a0a;columns:#333;font-family:Helvetica,Arial,sans-serif;font-size:40px;font-weight:700;line-height:1.3;margin:0;margin-bottom:10px;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:center">Buenos Días<br>Aequitas Abogados.</p></div></th><th class="expander" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0!important;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;visibility:hidden;width:0;word-wrap:break-word"></th></tr></tbody></table></th></tr></tbody></table><table class="spacer" style="border-collapse:collapse;border-spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><td height="50" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:50px;font-weight:400;hyphens:auto;line-height:50px;margin:0;mso-line-height-rule:exactly;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word">&nbsp;</td></tr></tbody></table><table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;position:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><th class="small-12 large-12 columns first last" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0 auto;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0 auto;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:640px;word-wrap:break-word"><table style="border-collapse:collapse;border-spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><th style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word"><div class="wrapper" style="display:block;margin:0 auto 0 auto;width:90%"><p class="subTitulo" style="Margin:0;Margin-bottom:10px;color:#0a0a0a;columns:#333;font-family:Helvetica,Arial,sans-serif;font-size:20px;font-weight:600;line-height:1.3;margin:0;margin-bottom:10px;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:center">Tenemos una solicitud de contacto:</p><p class="bodyCopy" style="Margin:0;Margin-bottom:10px;color:#0a0a0a;columns:#333;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:200;line-height:1.3;margin:0;margin-bottom:10px;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:center"><strong>Nombre: </strong>${this.dataForm.controls['name'].value},</p><p class="bodyCopy" style="Margin:0;Margin-bottom:10px;color:#0a0a0a;columns:#333;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:200;line-height:1.3;margin:0;margin-bottom:10px;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:center"><strong>Email: </strong>${this.dataForm.controls['email'].value},</p><p class="bodyCopy" style="Margin:0;Margin-bottom:10px;color:#0a0a0a;columns:#333;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:200;line-height:1.3;margin:0;margin-bottom:10px;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:center"><strong>Materia Legal: </strong>${this.dataForm.controls['legalMatter'].value['name']}</p><p class="bodyCopy" style="Margin:0;Margin-bottom:10px;color:#0a0a0a;columns:#333;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:200;line-height:1.3;margin:0;margin-bottom:10px;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:center"><strong>Mensaje Comentario: </strong>${this.dataForm.controls['comment'].value}</p><p class="bodyCopy" style="Margin:0;Margin-bottom:10px;color:#0a0a0a;columns:#333;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:200;line-height:1.3;margin:0;margin-bottom:10px;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:center">Quiere que se contacten para <strong>agendar el siguiente día: </strong>${this.datePipe.transform(this.dataForm.controls['scheduletime'].value, 'dd/MM/yyyy')}</p></div></th><th class="expander" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0!important;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;visibility:hidden;width:0;word-wrap:break-word"></th></tr></tbody></table></th></tr></tbody></table><table class="spacer" style="border-collapse:collapse;border-spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><td height="50" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:50px;font-weight:400;hyphens:auto;line-height:50px;margin:0;mso-line-height-rule:exactly;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word">&nbsp;</td></tr></tbody></table><table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;position:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><th class="small-12 large-12 columns first last" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0 auto;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0 auto;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:640px;word-wrap:break-word"><table style="border-collapse:collapse;border-spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><th style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word"><div class="wrapper" style="display:block;margin:0 auto 0 auto;width:90%"><p class="bodyCopy" style="Margin:0;Margin-bottom:10px;color:#0a0a0a;columns:#333;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:200;line-height:1.3;margin:0;margin-bottom:10px;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:center">Saluda Atte. Admin Aequitas</p></div></th><th class="expander" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0!important;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;visibility:hidden;width:0;word-wrap:break-word"></th></tr></tbody></table></th></tr></tbody></table><table class="spacer" style="border-collapse:collapse;border-spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><td height="50" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:50px;font-weight:400;hyphens:auto;line-height:50px;margin:0;mso-line-height-rule:exactly;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word">&nbsp;</td></tr></tbody></table><table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;position:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><th class="footer small-12 large-12 columns first last" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0 auto;background:#333;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0 auto;padding:30px 0 30px 0!important;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:640px;word-wrap:break-word"><table style="border-collapse:collapse;border-spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><th style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word"><img src="http://devfun.cl/aequitas/assets/img/aequitas-logo.svg" style="-ms-interpolation-mode:bicubic;clear:both;display:block;margin:0 auto 0 auto;max-width:100%;outline:0;text-decoration:none;width:auto"></th><th class="expander" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0!important;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;visibility:hidden;width:0;word-wrap:break-word"></th></tr></tbody></table></th></tr></tbody></table></td></tr></tbody></table></center></td></tr></table><!-- prevent Gmail on iOS font size manipulation --><div style="display:none;white-space:nowrap;font:15px courier;line-height:0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &`
    };


    // console.log('data form controls', this.dataForm.controls['legalMatter'].value['name'] );
    this.commonService.postEmail(data).subscribe( resp => {
      console.log('resp send email', resp);
    });
  }

}
