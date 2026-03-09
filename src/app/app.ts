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
  tasks: {name:string; done:boolean} []= [];

  constructor(){
    const savedTasks=localStorage.getItem('tasks');
    if(savedTasks){
      this.task=JSON.parse(savedTasks);
    }
  }

  saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.task));
  }

  addTask() {
    if (this.task.trim()) {
      this.tasks.push({name:this.task.trim(),done:false});
      this.task = '';
      this.saveTasks();
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }
   toggleDone(task: { name: string; done: boolean }) {
    task.done = !task.done;
    this.saveTasks();
  }
}
