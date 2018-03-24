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
        this.chatCollection.orderBy("time", "asc").onSnapshot(function (snapshot) {
            {
                _this.chatList = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCx1REFBd0Q7QUFNeEQ7SUFLRSx1QkFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFKaEMsYUFBUSxHQUFrQixFQUFFLENBQUE7SUFJUSxDQUFDO0lBRXJDLGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxvQ0FBWSxHQUFaO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQUEsUUFBUTtZQUM1RCxDQUFDO2dCQUNELEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO2dCQUNoQixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87b0JBQzFDLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUFsQyxDQUFrQyxDQUNuQyxFQUZtQixDQUVuQixDQUFDLENBQUE7WUFDSixDQUFDO1FBRUgsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsNEJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO1lBQ3RCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ3JCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtTQUNqQixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUVwQixDQUFDO0lBQ0QsNkJBQUssR0FBTDtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO1lBQ25DLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQXpDLENBQXlDLENBQUMsQ0FBQTtRQUNoRSxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFwQ1UsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO3lDQU0wQixhQUFNO09BTHJCLGFBQWEsQ0FxQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCJcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jaGF0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQvY2hhdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoYXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjaGF0TGlzdDogQXJyYXk8b2JqZWN0PiA9IFtdXG4gIG1lc3NhZ2U6IHN0cmluZ1xuICBjaGF0Q29sbGVjdGlvbjogZmlyZWJhc2UuZmlyZXN0b3JlLkNvbGxlY3Rpb25SZWZlcmVuY2VcbiAgdXNlcjogZmlyZWJhc2UuVXNlclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jaGF0Q29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKFwiY2hhdFwiKTtcbiAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4odXNlciA9PiB0aGlzLnVzZXIgPSB1c2VyKVxuICAgIHRoaXMubG9hZE1lc3NhZ2VzKCk7XG4gIH1cbiAgbG9hZE1lc3NhZ2VzKCkge1xuICAgIHRoaXMuY2hhdENvbGxlY3Rpb24ub3JkZXJCeShcInRpbWVcIiwgXCJhc2NcIikub25TbmFwc2hvdChzbmFwc2hvdCA9PiB7XG4gICAgICB7XG4gICAgICB0aGlzLmNoYXRMaXN0ID0gW11cbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiBzbmFwc2hvdC5mb3JFYWNoKG1lc3NhZ2UgPT5cbiAgICAgICAgICB0aGlzLmNoYXRMaXN0LnB1c2gobWVzc2FnZS5kYXRhKCkpXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICB9KVxuICB9XG4gIHNlbmQoKSB7XG4gICAgdGhpcy5jaGF0Q29sbGVjdGlvbi5hZGQoe1xuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgYXV0aG9yOiB0aGlzLnVzZXIudWlkLFxuICAgICAgdGltZTogbmV3IERhdGUoKVxuICAgIH0pXG4gICAgdGhpcy5tZXNzYWdlID0gXCJcIjtcblxuICB9XG4gIGNsZWFyKCl7XG4gICAgdGhpcy5jaGF0Q29sbGVjdGlvbi5nZXQoKS50aGVuKChpdGVtcyk9PntcbiAgICAgIGl0ZW1zLmZvckVhY2goaXRlbT0+dGhpcy5jaGF0Q29sbGVjdGlvbi5kb2MoaXRlbS5pZCkuZGVsZXRlKCkpXG4gICAgfSlcbiAgfVxufVxuIl19