"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./login/login.component");
var chat_component_1 = require("./chat/chat.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "chat", component: chat_component_1.ChatComponent },
];
exports.navigatableComponents = [
    login_component_1.LoginComponent, chat_component_1.ChatComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUF5RDtBQUN6RCx3REFBc0Q7QUFHekMsUUFBQSxNQUFNLEdBQUc7SUFDbEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtDQUM3QyxDQUFDO0FBRVcsUUFBQSxxQkFBcUIsR0FBRztJQUNqQyxnQ0FBYyxFQUFDLDhCQUFhO0NBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSBcIi4vY2hhdC9jaGF0LmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJjaGF0XCIsIGNvbXBvbmVudDogQ2hhdENvbXBvbmVudCB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcclxuICAgIExvZ2luQ29tcG9uZW50LENoYXRDb21wb25lbnRcclxuXTsgIl19