import { Routes } from '@angular/router';
import { MemberDetailed } from '../Features/members/member-detailed/member-detailed';
import { Home } from '../Features/home/home';
import { MemberList } from '../Features/members/member-list/member-list';
import { Lists } from '../Features/lists/lists';
import { Messages } from '../Features/messages/messages';
import { authGuard } from '../core/guards/auth-guard';


export const routes: Routes = [
    {path: '',component: Home},
    {path: 'member', component: MemberList, canActivate: [authGuard]},
    {
        path: '',
        runGuardsAndResolvers: "always",
        canActivate: [authGuard],
        children: [
            {path: 'member', component: MemberList},
            {path: 'members/:id', component: MemberDetailed},
            {path: 'lists', component: Lists},
            {path: 'messages', component: Messages},
        ]
    },
    {path: '**', component: Home},

];
