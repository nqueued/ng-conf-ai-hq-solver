import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmotionRecognitionComponent } from './emotion/emotion-recognition.component';
import { FaceDetectionComponent } from './face/face-detection/face-detection.component';
import { FaceVerificationComponent } from './face/face-verification/face-verification.component';
import { ComputerVisionReadTextComponent } from './computer-vision/computer-vision-read-text/computer-vision-read-text.component';
import { ComputerVisionAnalyzeImageComponent } from './computer-vision/computer-vision-analyze-image/computer-vision-analyze-image.component';
import { TextAnalysisComponent } from './text/text-analysis/text-analysis.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from '../upload/upload.component';
import { BingComponent } from './bing/bing.component';

const routes: Routes = [
  {
    path: 'home',
    component: UploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}
