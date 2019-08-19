export class AuthService {

    private isAuthenticated:boolean = false;

    isLogin() {
        this.isAuthenticated = true;
    }

    logout() {
        this.isAuthenticated = false;
        window.localStorage.clear();
    }

    isLogedIn():boolean {
        return this.isAuthenticated;
    }
}