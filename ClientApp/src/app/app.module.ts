import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ColaresComponent } from './colares/colares.component';
import { AneisComponent } from './aneis/aneis.component';
import { BrincosComponent } from './brincos/brincos.component';
import { ConjuntoComponent } from './conjunto/conjunto.component';

const routes:Routes=[
  { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'colares', component: ColaresComponent},
      { path: 'brincos', component: BrincosComponent},
      { path: 'conjuntos', component: ConjuntoComponent},
      { path: 'aneis', component: AneisComponent}
]

@NgModule({
  exports: [ RouterModule ],
  declarations: [
    AppComponent,
    HomeComponent,
    FetchDataComponent,
    ColaresComponent,
    AneisComponent,
    BrincosComponent,
    ConjuntoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
