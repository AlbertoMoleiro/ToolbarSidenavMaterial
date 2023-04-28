import { Injectable } from '@angular/core';
import { Menu } from '../models/Menu';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    menu: Menu[] = [
        { icon: 'home', name: 'Home', route: '' },
        { icon: 'person', name: 'About', route: 'about' },
        { icon: 'work', name: 'Projects', route: 'projects' },
        { icon: 'school', name: 'Curriculum', route: 'curriculum' },
        { icon: 'email', name: 'Contact', route: 'contact' }
    ];

  constructor() { }
}
