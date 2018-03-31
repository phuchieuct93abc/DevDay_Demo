"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.email = "user1@gmail.com";
        this.password = "123456";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        firebase.login({
            type: firebase.LoginType.PASSWORD,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHVEQUF3RDtBQUN4RCwwQ0FBeUM7QUFNekM7SUFHRSx3QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtJQUMxQixDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCw4QkFBSyxHQUFMO1FBQUEsaUJBU0M7UUFSQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2IsSUFBSSxFQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNoQyxlQUFlLEVBQUM7Z0JBQ2QsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLO2dCQUNoQixRQUFRLEVBQUMsSUFBSSxDQUFDLFFBQVE7YUFDdkI7U0FFRixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBakMsQ0FBaUMsRUFBQyxjQUFJLE9BQUEsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUE7SUFDMUUsQ0FBQztJQXBCVSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzNDLENBQUM7eUNBSTRCLGVBQU07T0FIdkIsY0FBYyxDQXVCMUI7SUFBRCxxQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGVtYWlsOnN0cmluZ1xuICBwYXNzd29yZDpzdHJpbmdcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuZW1haWwgPSBcInVzZXIxQGdtYWlsLmNvbVwiO1xuICAgIHRoaXMucGFzc3dvcmQgPSBcIjEyMzQ1NlwiXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG4gIGxvZ2luKCkge1xuICAgIGZpcmViYXNlLmxvZ2luKHtcbiAgICAgIHR5cGU6ZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxuICAgICAgcGFzc3dvcmRPcHRpb25zOntcbiAgICAgICAgZW1haWw6dGhpcy5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6dGhpcy5wYXNzd29yZFxuICAgICAgfVxuXG4gICAgfSkudGhlbigoKT0+dGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcImNoYXRcIiksKCk9PmFsZXJ0KFwiTG9naW4gZmFpbGVkXCIpKVxuICB9XG5cblxufVxuIl19