import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header class="header-6">
    <div class="branding">
        <a href="" class="nav-link">
            <clr-icon shape="eye" class="is-solid"></clr-icon>
            <span class="title">Eastern</span>
        </a>
    </div>
    <div class="header-actions">
        <clr-dropdown>
            <button class="nav-text" clrDropdownTrigger>
                tao@te.ching
                <clr-icon shape="caret down"></clr-icon>
            </button>
            <clr-dropdown-menu *clrIfOpen clrPosition="bottom-right">
                <a href="..." clrDropdownItem>Preferences</a>
                <a href="..." clrDropdownItem>Log out</a>
            </clr-dropdown-menu>
        </clr-dropdown>
    </div>
  </header>
  <nav class="subnav">
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" href="">Enter Reading</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" routerLink="['/detail', 100101]">Random Reading</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Journal</a>
        </li>
    </ul>
  </nav>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'eastern';
}
