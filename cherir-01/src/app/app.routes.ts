import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InfoDetailComponent } from './pages/info-detail/info-detail.component';
import { PaymentDetailComponent } from './pages/payment-detail/payment-detail.component';
import { CardComponent } from './pages/card/card.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FinishComponent } from './pages/finish/finish.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'card', component: CardComponent },
  { path: 'payment-detail', component: PaymentDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'info-detail', component: InfoDetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent},
  {path : 'login',component: LoginComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'finish', component: FinishComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: '**', component: NotfoundComponent},
];
