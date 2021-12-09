import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sideNav';
  isMenuHide: boolean = false;

  moveSideMenu() {
    this.isMenuHide = !this.isMenuHide;
  }

  displaySubMenu(aElement: any) {
    (aElement as HTMLElement).classList.toggle('show');
  }

  showHideSubmenu(event: Event) {
    var ele: HTMLElement = event.target as HTMLElement;
    var aElement = ele.closest('[data-dropdown-button]');
    if (aElement != null) {
      this.displaySubMenu(aElement);
    }
  }

  showShrinkSubMenu(event: Event) {
    var ele: HTMLElement = event.target as HTMLElement;
    ele.classList.toggle('active', true);
  }

  hideShrinkSubMenu(event: Event) {
    var ele: HTMLElement = event.target as HTMLElement;
    var eleDropDownBtn = ele.previousElementSibling?.closest(
      '[data-dropdown-button]'
    );
    if (eleDropDownBtn != null && eleDropDownBtn != undefined) {
      eleDropDownBtn.classList.toggle('active', false);
    }
  }
}
