import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sideNav';
  isMenuHide: boolean = false;
  showSubMenu: boolean = false;
  //expand:string = '<i class="fa fa-plus-circle"></i>';
  //collapse:string='<i class="fa fa-minus-circle"></i>';

  //expand:string='<i class="fa fa-chevron-circle-down" aria-hidden="true"></i>';
  //collapse:string='<i class="fa fa-chevron-circle-up" aria-hidden="true"></i>';

  expand: string = '<i class="fa fa-caret-down" aria-hidden="true"></i>';
  collapse: string = '<i class="fa fa-caret-up" aria-hidden="true"></i>';

  //collapseIcon:string = '<i class="fa fa-angle-double-down" aria-hidden="true"></i>';

  moveSideMenu() {
    this.isMenuHide = !this.isMenuHide;
  }

  switchToggleIcon(aElement: any) {
    if (aElement.lastChild.lastChild.lastChild != null) {
      (aElement.lastChild.lastChild.lastChild as HTMLElement).classList.toggle(
        'fa-caret-up'
      );
      (aElement.lastChild.lastChild.lastChild as HTMLElement).classList.toggle(
        'fa-caret-down'
      );
    }
  }

  displaySubMenu(aElement: any) {
    (aElement as HTMLElement).classList.toggle('show');
    this.switchToggleIcon(aElement);
  }

  showHideSubmenu(event: Event) {
    var ele: HTMLElement = event.target as HTMLElement;
    var aElement = ele.closest('[data-dropdown-button]');
    if (aElement != null) {
      this.displaySubMenu(aElement);
    }
  }
}
