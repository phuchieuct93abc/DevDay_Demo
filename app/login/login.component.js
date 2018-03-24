"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebasse = require("nativescript-plugin-firebase");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.email = "user1@gmail.com";
        this.password = "123456";
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        firebasse.login({
            type: firebasse.LoginType.PASSWORD,
            passwordOptions: {
                email: this.email,
                password: this.password
            }
        }).then(function () { return _this.router.navigateByUrl("chat"); }, function () { return alert("Login failed"); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: "./login/login.component.html",
            styleUrls: ['./login/login.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHdEQUF5RDtBQUN6RCwwQ0FBZ0Q7QUFNaEQ7SUFHRSx3QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBQyxpQkFBaUIsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQTtJQUN2QixDQUFDO0lBRUYsaUNBQVEsR0FBUixjQUFhLENBQUM7SUFDZCw4QkFBSyxHQUFMO1FBQUEsaUJBVUM7UUFUQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNsQyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEI7U0FDRixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBakMsQ0FBaUMsRUFDdkMsY0FBTSxPQUFBLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBckIsQ0FBcUIsQ0FDaEMsQ0FBQTtJQUNMLENBQUM7SUFuQlUsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUMzQyxDQUFDO3lDQUk0QixlQUFNO09BSHZCLGNBQWMsQ0FxQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzc2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIlxuaW1wb3J0IHsgUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGVtYWlsIDpzdHJpbmdcbiAgcGFzc3dvcmQgOnN0cmluZ1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5lbWFpbD1cInVzZXIxQGdtYWlsLmNvbVwiO1xuICAgIHRoaXMucGFzc3dvcmQ9XCIxMjM0NTZcIlxuICAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG4gIGxvZ2luKCkge1xuICAgIGZpcmViYXNzZS5sb2dpbih7XG4gICAgICB0eXBlOiBmaXJlYmFzc2UuTG9naW5UeXBlLlBBU1NXT1JELFxuICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XG4gICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxuICAgICAgfVxuICAgIH0pLnRoZW4oKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcImNoYXRcIiksXG4gICAgICAgICAgICAoKSA9PiBhbGVydChcIkxvZ2luIGZhaWxlZFwiKVxuICAgICAgKVxuICB9XG5cbn1cbiJdfQ==