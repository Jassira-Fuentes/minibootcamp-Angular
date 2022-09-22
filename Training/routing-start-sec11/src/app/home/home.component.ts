import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id: number) {
    // quiero almacenar datos en el backend, necesito acceso al router, lo podemos inyectar a traves del constructor y obtenre algunos metodos para usar aca, muestro una ruta absoluta
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});

  }

  onLogin(){
    this.authService.login();
  }

  onLogout(){
    this.authService.logout()
  }

}
