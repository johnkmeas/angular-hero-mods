"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var dashboard_component_1 = require('./dashboard.component');
var like_component_1 = require('./like.component');
var appRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'likes',
        component: like_component_1.LikeComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map