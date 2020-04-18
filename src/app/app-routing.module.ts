import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { FactoriesComponent } from './pages/factories/factories.component';
import { FactoryDetailsComponent } from './pages/factory-details/factory-details.component';
import { AddFactoryComponent } from './pages/add-factory/add-factory.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Factories/:searchTxt', component: FactoriesComponent },
  { path: 'Factories', component: FactoriesComponent },
  { path: 'Factories/sector', component: FactoriesComponent },
  { path: 'FactoryDetails/:id', component: FactoryDetailsComponent },
  { path: 'AddFactory', component: AddFactoryComponent },
  { path: 'ContactUs', component: ContactUsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
