import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  task: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.task.trim()) {
      this.tasks.push(this.task.trim());
      this.task = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
