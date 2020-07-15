import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss']
})
export class FAQPage implements OnInit {
  title: string = 'Screen Burning Services & Pre-Burned Screens FAQS';

  constructor() {}

  ngOnInit() {}
}
