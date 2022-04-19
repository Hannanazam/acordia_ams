import { Component , OnInit ,ElementRef, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
// export class AppComponent{
  title = 'my-first-project';
  constructor() { }
  // constructor(private elementRef: ElementRef,@Inject(DOCUMENT) private doc)
  // {
  // }
  ngOnInit(): void {
    // this.loadScript();
    // loadComponent = true;
  }
  // loadScript(){
  //   var s14 = document.createElement("script");
  //   s14.type = "text/javascript";
  //   s14.src = "src/assets/multi-form.js";
  //   this.elementRef.nativeElement.appendChild(s14);
  // }
  // public loadScript(url: 'src/assets/multi-form.js') {
  //   const body = <HTMLDivElement>document.body;
  //   const script = document.createElement('script');
  //   script.innerHTML = '';
  //   script.src = url;
  //   script.async = false;
  //   script.defer = true;
  //   body.appendChild(script);
  // }
}
