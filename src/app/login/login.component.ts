import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../_models/user';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    model: any = {};
    loading = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    login() {
        this.loading = true;

        setTimeout(() => {
            if (this.model.userid == '1') {
                console.log("success");
                this.router.navigate(['/home']);
            }
            else {
                console.log("failure to login");
                this.loading = false;
                this.model.userid = '';
            }
        }, 1000);
    }
}
