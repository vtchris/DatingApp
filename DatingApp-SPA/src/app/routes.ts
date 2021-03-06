
import { Routes } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { ListsResolver } from './_resolver/lists.resolver';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MessagesComponent } from './messages/messages.component';
import { MessagesResolver } from './_resolver/messages.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes-guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent,
                resolve: {users: MemberListResolver} },
            { path: 'members/:id', component: MemberDetailComponent,
                resolve: {user: MemberDetailResolver} },
            { path: 'member/edit', component: MemberEditComponent,
                resolve: {user: MemberEditResolver},
                canDeactivate: [PreventUnsavedChanges] },
            { path: 'messages', component: MessagesComponent, resolve: {messages: MessagesResolver} },
            { path: 'lists', component: ListsComponent, resolve: {users: ListsResolver} },
        ]
    },
    // You can apply the guard to all the children, or to each route individually as below.
    // { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
