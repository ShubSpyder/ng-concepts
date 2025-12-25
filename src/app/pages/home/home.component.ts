import { Component } from '@angular/core';

export interface RoadmapCategory {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  roadmap: RoadmapCategory[] = [
    {
      title: '1. Core Architecture (Deep Dive)',
      items: [
        'Change Detection (Zone.js, OnPush, Zoneless)',
        'Dependency Injection (Resolution modifiers, Scopes)',
        'View Encapsulation (Emulated, ShadowDom)',
        'Lifecycle Hooks (Order, Nested, content projection)',
        'Rendering (Ivy, JIT vs AOT)'
      ]
    },
    {
      title: '2. Modern Angular (v16+)',
      items: [
        'Signals (Primitives, computed, effect)',
        'Control Flow (@if, @for, @defer)',
        'Deferrable Views',
        'Standalone Components',
        'Host Directives'
      ]
    },
    {
      title: '3. Reactive Programming (RxJS)',
      items: [
        'Operators (switchMap, mergeMap, etc)',
        'Patterns (Caching, Declarative)',
        'Subjects (BehaviorSubject, ReplaySubject)',
        'Schedulers (Microtasks vs Macrotasks)',
        'Marble Testing'
      ]
    },
    {
      title: '4. State Management',
      items: [
        'Local State (Services + Signals)',
        'Global State (NgRx, NGXS)',
        'Server State (React Query / Manual)',
        'Facade Pattern'
      ]
    },
    {
      title: '5. Performance Optimization',
      items: [
        'Code Splitting & Lazy Loading',
        'Hydration (SSR)',
        'Runtime Performance (Profiling)',
        'Bundle Optimization'
      ]
    },
    {
      title: '6. Advanced Patterns',
      items: [
        'Dynamic Components',
        'Content Projection (Slots, ngProjectAs)',
        'Directives (Structural, Attribute)',
        'Guards & Interceptors',
        'Micro-frontends & Monorepos'
      ]
    },
    {
      title: '7. Testing & Security',
      items: [
        'Unit Testing (Jasmine/Jest, Harnesses)',
        'E2E Testing (Cypress/Playwright)',
        'XSS Prevention & CSP',
        'Auth Patterns (JWT, Interceptors)'
      ]
    }
  ];
}
