import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Add this

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Add CommonModule here
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  email: string = '';
  password: string = '';
  message: string = '';

  login() {
    console.log('Email:', this.email+"\nPassword:", this.password);
  }
}