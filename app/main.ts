import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import * as firebase from "nativescript-plugin-firebase"
import { enableProdMode } from "@angular/core";
firebase.init({
    persist:false
})
enableProdMode()
platformNativeScriptDynamic().bootstrapModule(AppModule);
