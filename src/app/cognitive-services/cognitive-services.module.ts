import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { FaceDataService } from './face-data.service';
import { VisionDataService } from './vision-data.service';
import { TextDataService } from './text-data.service';
import { BingSearchService } from './bing-search.service';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
      DataService,
      FaceDataService,
      VisionDataService,
      TextDataService,
      BingSearchService,
  ]
})
export class CognitiveServicesModule { }
