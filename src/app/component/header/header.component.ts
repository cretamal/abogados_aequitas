import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  anchorPage:boolean = false;
  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }

  toPageSelect(page){
    this.router.navigate(['/'], { fragment: page });
  }
}
