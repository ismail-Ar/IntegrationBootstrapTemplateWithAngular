import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: "layout", component: LayoutComponent, children : [
  {
    path: 'items',
    loadChildren: () => import('../components/test/test.module').then(m => m.TestModule)
  }
] },
{ path: "login", component: LoginComponent }];



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, LayoutComponent, LoginComponent],
  imports: [CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedModule { }
