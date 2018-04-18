import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CognitiveServicesModule } from './cognitive-services/cognitive-services.module';
import { DemoModule } from './demo/demo.module';
import { AppRoutingModule } from './app-routing.module';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DemoModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
