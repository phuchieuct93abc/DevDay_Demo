import { LoginComponent } from "./login/login.component";
import { ChatComponent } from "./chat/chat.component";


export const routes = [
    { path: "", component: LoginComponent },
    { path: "chat", component: ChatComponent },
];

export const navigatableComponents = [
    LoginComponent,ChatComponent
]; 