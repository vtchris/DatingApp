import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { AuthService } from './_services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MessagesComponent } from './messages/messages.component';
import { NavComponent } from './nav/nav.component';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes-guard';
import { RegisterComponent } from './register/register.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    MemberListComponent,
    MessagesComponent,
    NavComponent,
    PhotoEditorComponent,
    RegisterComponent,
   ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    // This will automatically attach the token to the headers of appropriate requests
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: ['localhost:5000/api/auth']
      }
    }),
    TabsModule.forRoot(),
    NgxGalleryModule,
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    MemberDetailResolver,
    MemberEditResolver,
    MemberListResolver,
    PreventUnsavedChanges,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
