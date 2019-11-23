import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {InfoComponent, PaceComponent, TimeComponent} from './pages';

const routes: Routes = [
    {path: '', redirectTo: 'pace', pathMatch: 'full'},
    {path: 'pace', component: PaceComponent},
    {path: 'time', component: TimeComponent},
    {path: 'info', component: InfoComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
