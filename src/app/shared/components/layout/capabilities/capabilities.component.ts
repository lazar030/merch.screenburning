import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.scss']
})
export class CapabilitiesComponent {
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
