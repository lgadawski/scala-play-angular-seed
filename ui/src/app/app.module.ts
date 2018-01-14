import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { AppService } from './app.service';
import { ResourcesService } from './resources/resources.service';
import { HttpClientModule } from '@angular/common/http';
import { RouteExampleComponent } from './route-example/route-example.component';

const routes: Routes = [
    {
        path: 'play',
        component: RouteExampleComponent,
        data: { technology: 'Play' }
    },
    { path: '',   redirectTo: '/play', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        ResourcesComponent,
        RouteExampleComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    providers: [AppService, ResourcesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
