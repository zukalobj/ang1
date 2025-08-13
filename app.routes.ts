import { Routes } from '@angular/router';
import { ContactComponent} from "./contact/contact.component"
import { AboutComponent } from "./about/about.component"
import { MainComponent} from "./main/main.component"

export const routes: Routes = [
    {
        path :"main",
        component : MainComponent
    },
    {
        path :"about",
        component: AboutComponent
    },
    {
        path : "contact",
        component: ContactComponent
    }
];

