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
        firebase.getCurrentUser().then(function (user) { return _this.user = user; });
        this.loadMessages();
    };
    ChatComponent.prototype.loadMessages = function () {
        var _this = this;
        this.chatList = [];
        this.chatCollection.orderBy("time", "asc").onSnapshot(function (snapshot) {
            {
                _this.zone.run(function () { return snapshot.forEach(function (message) {
                    return _this.chatList.push(message.data());
                }); });
            }
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
    ChatComponent.prototype.clear = function () {
        var _this = this;
        this.chatCollection.get().then(function (items) {
            items.forEach(function (item) { return _this.chatCollection.doc(item.id).delete(); });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCx1REFBd0Q7QUFNeEQ7SUFLRSx1QkFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFKaEMsYUFBUSxHQUFrQixFQUFFLENBQUE7SUFJUSxDQUFDO0lBRXJDLGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxvQ0FBWSxHQUFaO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQUEsUUFBUTtZQUM1RCxDQUFDO2dCQUVDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztvQkFDMUMsT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQWxDLENBQWtDLENBQ25DLEVBRm1CLENBRW5CLENBQUMsQ0FBQTtZQUNKLENBQUM7UUFFSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCw0QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDckIsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1NBQ2pCLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFDRCw2QkFBSyxHQUFMO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDbkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBekMsQ0FBeUMsQ0FBQyxDQUFBO1FBQ2hFLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQXJDVSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7eUNBTTBCLGFBQU07T0FMckIsYUFBYSxDQXNDekI7SUFBRCxvQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIlxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNoYXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhdC9jaGF0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNoYXRMaXN0OiBBcnJheTxvYmplY3Q+ID0gW11cbiAgbWVzc2FnZTogc3RyaW5nXG4gIGNoYXRDb2xsZWN0aW9uOiBmaXJlYmFzZS5maXJlc3RvcmUuQ29sbGVjdGlvblJlZmVyZW5jZVxuICB1c2VyOiBmaXJlYmFzZS5Vc2VyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNoYXRDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJjaGF0XCIpO1xuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbih1c2VyID0+IHRoaXMudXNlciA9IHVzZXIpXG4gICAgdGhpcy5sb2FkTWVzc2FnZXMoKTtcbiAgfVxuICBsb2FkTWVzc2FnZXMoKSB7XG4gICAgdGhpcy5jaGF0TGlzdCA9IFtdXG4gICAgdGhpcy5jaGF0Q29sbGVjdGlvbi5vcmRlckJ5KFwidGltZVwiLCBcImFzY1wiKS5vblNuYXBzaG90KHNuYXBzaG90ID0+IHtcbiAgICAgIHtcbiAgICAgIFxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHNuYXBzaG90LmZvckVhY2gobWVzc2FnZSA9PlxuICAgICAgICAgIHRoaXMuY2hhdExpc3QucHVzaChtZXNzYWdlLmRhdGEoKSlcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgIH0pXG4gIH1cbiAgc2VuZCgpIHtcbiAgICB0aGlzLmNoYXRDb2xsZWN0aW9uLmFkZCh7XG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBhdXRob3I6IHRoaXMudXNlci51aWQsXG4gICAgICB0aW1lOiBuZXcgRGF0ZSgpXG4gICAgfSlcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlwiO1xuXG4gIH1cbiAgY2xlYXIoKXtcbiAgICB0aGlzLmNoYXRDb2xsZWN0aW9uLmdldCgpLnRoZW4oKGl0ZW1zKT0+e1xuICAgICAgaXRlbXMuZm9yRWFjaChpdGVtPT50aGlzLmNoYXRDb2xsZWN0aW9uLmRvYyhpdGVtLmlkKS5kZWxldGUoKSlcbiAgICB9KVxuICB9XG59XG4iXX0=