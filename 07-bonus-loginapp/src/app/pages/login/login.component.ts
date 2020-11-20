import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../../models/usuario.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	usuario: LoginModel;

  constructor() { }

  ngOnInit() {
		this.usuario = new LoginModel();
  }

  login( form: NgForm ) {
		if ( form.invalid ) {
			return;
		}

		console.log(this.usuario);
	}

}
