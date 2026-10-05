import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './styles.css';

const router = createRouter({ history:createWebHistory(), routes:[
  { path:'/', component:()=>import('./views/HomeView.vue') },
  { path:'/analysis/:id', component:()=>import('./views/ReportView.vue') },
  { path:'/analysis/:id/scenario/:scenarioId', component:()=>import('./views/ScenarioView.vue') },
  { path:'/analysis/:id/scenario/:scenarioId/wireframes', component:()=>import('./views/WireframeGalleryView.vue') },
  { path:'/history', component:()=>import('./views/HistoryView.vue') }
]});
createApp(App).use(router).mount('#app');
