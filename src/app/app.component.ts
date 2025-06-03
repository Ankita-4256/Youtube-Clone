import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'VTube';
    isDarkMode = false;

  toggleSidebar(): void {
    document.body.classList.toggle("sidebar-hidden");
  }

   darkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode');
  }

  get themeIconClass(): string {
    return this.isDarkMode ? 'uil-sun' : 'uil-moon';
  }
}
