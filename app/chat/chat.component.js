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
        var _this = this;
        this.chatCollection.orderBy("time", "asc").onSnapshot(function (snapshot) {
            _this.zone.run(function () {
                _this.chatList = [];
                snapshot.forEach(function (item) { return _this.chatList.push(item.data()); });
            });
        });
    };
    ChatComponent.prototype.send = function () {
        this.chatCollection.add({
            message: this.message,
            author: this.user.uid,
            time: new Date()
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCx1REFBd0Q7QUFNeEQ7SUFLRSx1QkFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFKaEMsYUFBUSxHQUFrQixFQUFFLENBQUE7SUFJUSxDQUFDO0lBRXJDLGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixDQUFDLENBQUEsQ0FBQSxrQkFBa0I7UUFDMUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQUEsUUFBUTtZQUMzRCxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDWixLQUFJLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQztnQkFDakIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUE7WUFFekQsQ0FBQyxDQUFDLENBQUE7UUFFSixDQUFDLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFDRCw0QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsT0FBTyxFQUFDLElBQUksQ0FBQyxPQUFPO1lBQ3BCLE1BQU0sRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDcEIsSUFBSSxFQUFDLElBQUksSUFBSSxFQUFFO1NBRWhCLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFsQ1UsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO3lDQU0wQixhQUFNO09BTHJCLGFBQWEsQ0FvQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCJcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jaGF0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQvY2hhdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoYXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjaGF0TGlzdDogQXJyYXk8b2JqZWN0PiA9IFtdXG4gIG1lc3NhZ2U6IHN0cmluZ1xuICBjaGF0Q29sbGVjdGlvbjogZmlyZWJhc2UuZmlyZXN0b3JlLkNvbGxlY3Rpb25SZWZlcmVuY2VcbiAgdXNlcjogZmlyZWJhc2UuVXNlclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jaGF0Q29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKFwiY2hhdFwiKTtcbiAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4odXNlciA9PiB0aGlzLnVzZXIgPSB1c2VyKS8vR2V0IGN1cnJlbnQgdXNlclxuICAgIHRoaXMubG9hZE1lc3NhZ2VzKCk7XG4gIH1cblxuICBsb2FkTWVzc2FnZXMoKSB7XG4gICAgdGhpcy5jaGF0Q29sbGVjdGlvbi5vcmRlckJ5KFwidGltZVwiLFwiYXNjXCIpLm9uU25hcHNob3Qoc25hcHNob3Q9PntcbiAgICAgIHRoaXMuem9uZS5ydW4oKCk9PntcbiAgICAgICAgdGhpcy5jaGF0TGlzdD1bXTtcbiAgICAgICAgc25hcHNob3QuZm9yRWFjaChpdGVtPT50aGlzLmNoYXRMaXN0LnB1c2goaXRlbS5kYXRhKCkpKVxuXG4gICAgICB9KVxuXG4gICAgfSlcblxuICB9XG4gIHNlbmQoKSB7XG4gICAgdGhpcy5jaGF0Q29sbGVjdGlvbi5hZGQoe1xuICAgICAgbWVzc2FnZTp0aGlzLm1lc3NhZ2UsXG4gICAgICBhdXRob3I6dGhpcy51c2VyLnVpZCxcbiAgICAgIHRpbWU6bmV3IERhdGUoKVxuXG4gICAgfSlcblxuICAgIHRoaXMubWVzc2FnZSA9IFwiXCI7XG5cbiAgfVxuXG59XG4iXX0=