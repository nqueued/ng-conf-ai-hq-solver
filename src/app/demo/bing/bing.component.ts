import { Component, Input, AfterViewInit, OnChanges } from "@angular/core";
import { BingSearchService } from "../../cognitive-services/bing-search.service";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'bing',
  template: `
  <br><br><br>
  <ng-container *ngIf="link">
    <iframe [src]='sanitizer.bypassSecurityTrustResourceUrl(link)' width="640" height="360" frameborder="0"
        webkitallowfullscreen mozallowfullscreen allowfullscreen>
    </iframe>
  </ng-container>
`,
})
export class BingComponent implements AfterViewInit, OnChanges {

  link: string;

  @Input('text') text: string;


  constructor(private bingService: BingSearchService, 
  public sanitizer: DomSanitizer) {
    
  }

  ngAfterViewInit() {
   if (this.text) {
    this.searchByText(this.text)
   }
  }

  ngOnChanges(changes) {
    if (changes.text.previousValue !== changes.text.currentValue) {
      this.searchByText(changes.text.currentValue)
    }
  }
  
  searchByText(text) {
    this.bingService.getFirstResult(text)
      .then((results) => {
        if (results.webPages) {
          this.link = undefined;
          setTimeout(() => {
            this.link = results.webPages.value["0"].url
          }) 
          
        }
        
      });
  }

}