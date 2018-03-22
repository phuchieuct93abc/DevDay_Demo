import { routes, navigatableComponents } from './app.routing';
import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";
 
import { AppComponent } from "./app.component";

@NgModule({
  imports: [NativeScriptModule,NativeScriptFormsModule,NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [AppComponent,...navigatableComponents],
  bootstrap: [AppComponent]
})
export class AppModule {}
