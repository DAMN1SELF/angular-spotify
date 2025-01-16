import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderComponent } from './components/header/header.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MediaPlayerComponent,
    HeaderComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  exports:[
    SidebarComponent,
    MediaPlayerComponent,
    HeaderComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
