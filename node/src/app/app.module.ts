import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {AccordionModule} from 'primeng/primeng';     
import {MenuItem} from 'primeng/primeng';            
import {GalleriaModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostsService } from './posts.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from "./user.service";
import {NgxPaginationModule} from 'ngx-pagination'; 
// import { AuthguardGuard } from './authguard.guard';

const appRoutes:Routes = [
  // {
  //   path: 'users',
  //   pathMatch: 'full',
  //   // children: [
  //   //   {
  //   //     path: ':name',
  //   //     component: UserComponent
  //   //   }, 
  //   //   {
  //   //      path: ':name/:id',
  //   //      component: UserComponent
  //   //   }
  //   // ]
  // },
  {
    path: 'dashboard',
    // canActivate: [AuthguardGuard],
    component: DashboardComponent
  },
  {
    path: '',
    // redirectTo: 'users/mehulmpt/1',
    // pathMatch: 'prefix'
    component: LoginFormComponent,
  }
  // {
  //   path: '**',
  //   component: NotfoundComponent
  // }
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    AccordionModule,
    GalleriaModule,
    HttpModule,
    NgxPaginationModule
    ],
  providers: [UserService],
  bootstrap: [AppComponent],

})
export class AppModule { }
