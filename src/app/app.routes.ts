import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomDirectivesComponent } from './pages/custom-directives/custom-directives.component';
import { CustomPipesComponent } from './pages/custom-pipes/custom-pipes.component';
import { UnitTestingComponent } from './pages/unit-testing/unit-testing.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'custom-directives',
        component: CustomDirectivesComponent
    },
    {
        path: 'custom-pipes',
        component: CustomPipesComponent
    },
    {
        path: 'unit-testing',
        component: UnitTestingComponent
    }
];
