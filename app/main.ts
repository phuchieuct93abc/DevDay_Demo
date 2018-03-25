import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import * as firebase from "nativescript-plugin-firebase"
firebase.init({
    persist:false
})
platformNativeScriptDynamic().bootstrapModule(AppModule);
