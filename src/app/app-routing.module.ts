import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'calldoctor', loadChildren: './pages/calldoctor/calldoctor.module#CalldoctorPageModule' },
  { path: 'donator', loadChildren: './pages/donator/donator.module#DonatorPageModule' },
  { path: 'volunteer', loadChildren: './pages/volunteer/volunteer.module#VolunteerPageModule' },
  { path: 'adm', loadChildren: './pages/adm/adm.module#AdmPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'profileold', loadChildren: './pages/profileold/profileold.module#ProfileoldPageModule' },
  { path: 'profiledonator', loadChildren: './pages/profiledonator/profiledonator.module#ProfiledonatorPageModule' },
  { path: 'profilevolunteer', loadChildren: './pages/profilevolunteer/profilevolunteer.module#ProfilevolunteerPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'oldlist', loadChildren: './pages/oldlist/oldlist.module#OldlistPageModule' },
  { path: 'donate', loadChildren: './pages/donate/donate.module#DonatePageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
