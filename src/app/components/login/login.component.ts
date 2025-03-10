import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {delay} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  loginForm!: FormGroup;  // Usar el operador "!" para indicar que la variable no es null ni undefined.
  hidePassword: boolean = true;
  alertMessage: string = '';
  alertClass: string = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;
    if (username === 'admin' && password === 'admin123') {
      this.alertMessage = '¡Ingreso exitoso!';
      this.alertClass = 'alert-success'; // Estilo de alerta de éxito
      this.router.navigate(['/clientes/listar']);

    } else {
      this.alertMessage = 'Usuario o contraseña incorrectos';
      this.alertClass = 'alert-danger'; // Estilo de alerta de error
    }
  }
}
