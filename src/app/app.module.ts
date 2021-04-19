import { InterceptorService } from './loader/interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TournoiComponent } from './components/tournoi/tournoi.component';
import { PhaseComponent } from './components/phase/phase.component';
import { AboutComponent } from './components/about/about.component';
import { JouerComponent } from './components/jouer/jouer.component';
import { ProductComponent } from './components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBar, MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule} from '@angular/material/paginator';


import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CategoriesComponent } from './components/components/categories/categories.component';



const appRoute: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'tournoi', component: TournoiComponent },
  { path: 'phase', component: PhaseComponent },
  { path: 'jouer', component: JouerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent },
  { path: 'categories', component: CategoriesComponent }

];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    TournoiComponent,
    PhaseComponent,
    AboutComponent,
    JouerComponent,
    ProductComponent,
    CategoriesComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptorService,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
