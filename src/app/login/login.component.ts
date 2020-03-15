import { Component, OnInit } from "@angular/core";
import { Usuario } from "../model/usuario";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  errorMessage: string;
  loading: boolean = false;

  constructor(private router: Router, private service: LoginService) {}

  ngOnInit() {}

  public login() {
    this.service.getToken(this.usuario).subscribe(
      usuario => {
        console.log("usuario", usuario);
        sessionStorage.setItem("user", usuario);
        sessionStorage.setItem("token", usuario.token);
        this.redirectLogin();
      },
      error => {
        this.errorMessage = <any>error;
        console.log("error login", this.errorMessage);
        this.router.navigate(["/mlogin"]);
      }
    );
  }

  public redirectLogin() {
    console.log("redireccionandooooo");
    this.router.navigate(["/mfacade/facade/minicio"]);
  }
}
