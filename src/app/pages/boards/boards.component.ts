import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@components/navbar/navbar.component';
import {
  faBox,
  faWaveSquare,
  faClock,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [
    NavbarComponent,
    FontAwesomeModule,
    CdkAccordionModule,
    CommonModule,
  ],
  templateUrl: './boards.component.html',
})
export class BoardsComponent implements OnInit {
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faTrello = faTrello;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'Item 1',
      items: [{ label: 'Sub Item 1.1' }, { label: 'Sub Item 1.2' }],
    },
    {
      label: 'Item 2',
      items: [{ label: 'Sub Item 2.1' }, { label: 'Sub Item 1.2' }],
    },
    {
      label: 'Item 3',
      items: [
        { label: 'Sub Item 3.1' },
        { label: 'Sub Item 3.2' },
        { label: 'Sub Item 3.3' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
