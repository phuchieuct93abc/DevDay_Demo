"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(zone) {
        this.zone = zone;
        this.chatList = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatCollection = firebase.firestore.collection("chat");
        firebase.getCurrentUser().then(function (user) { return _this.user = user; }); //Get current user
        this.loadMessages();
    };
    ChatComponent.prototype.loadMessages = function () {
    };
    ChatComponent.prototype.send = function () {
        this.message = "";
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'app-chat',
            templateUrl: './chat/chat.component.html',
            styleUrls: ['./chat/chat.component.scss']
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCx1REFBd0Q7QUFNeEQ7SUFLRSx1QkFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFKaEMsYUFBUSxHQUFrQixFQUFFLENBQUE7SUFJUSxDQUFDO0lBRXJDLGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixDQUFDLENBQUEsQ0FBQSxrQkFBa0I7UUFDMUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxvQ0FBWSxHQUFaO0lBRUEsQ0FBQztJQUNELDRCQUFJLEdBQUo7UUFFRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUVwQixDQUFDO0lBcEJVLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzt5Q0FNMEIsYUFBTTtPQUxyQixhQUFhLENBc0J6QjtJQUFELG9CQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2hhdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0L2NoYXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2hhdExpc3Q6IEFycmF5PG9iamVjdD4gPSBbXVxuICBtZXNzYWdlOiBzdHJpbmdcbiAgY2hhdENvbGxlY3Rpb246IGZpcmViYXNlLmZpcmVzdG9yZS5Db2xsZWN0aW9uUmVmZXJlbmNlXG4gIHVzZXI6IGZpcmViYXNlLlVzZXJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2hhdENvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbihcImNoYXRcIik7XG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKHVzZXIgPT4gdGhpcy51c2VyID0gdXNlcikvL0dldCBjdXJyZW50IHVzZXJcbiAgICB0aGlzLmxvYWRNZXNzYWdlcygpO1xuICB9XG4gIFxuICBsb2FkTWVzc2FnZXMoKSB7XG4gICAgXG4gIH1cbiAgc2VuZCgpIHtcblxuICAgIHRoaXMubWVzc2FnZSA9IFwiXCI7XG5cbiAgfVxuIFxufVxuIl19