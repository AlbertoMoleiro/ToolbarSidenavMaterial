import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Menu } from './models/Menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    menus: Menu[] = [];

    constructor(private data: DataService) {
        this.menus = this.data.menu;

    }
}
