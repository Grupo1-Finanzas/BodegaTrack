import { UserService } from '../../services/user/user.service';
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './log-in.component.html',
    imports: [
        ReactiveFormsModule
    ],
    styleUrls: ['./log-in.component.css']
})

export class LogInComponent{
  loginForm: FormGroup;
  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: UserService) {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]]
      })
  }

  async login() {
    try{
      const user = await this.authService.login({
          email: this.loginForm.value.email,
          password: this.loginForm.value.password
      });

      if(user){
        console.log('Inicio de sesión exitoso');
      } else{
        this.loginError = true;
        console.log('Credenciales incorrectas')
      }
    } catch (error){
      console.log('Error de inicio de sesión', error)
    }
  }
}
