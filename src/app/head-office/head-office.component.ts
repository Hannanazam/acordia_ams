import { Component , OnInit ,ElementRef, Inject, AfterViewChecked} from '@angular/core';
import { DOCUMENT } from '@angular/common';
declare const $:any;
// import * as $ from 'jquery';
// import 'datatables.net-dt/css/jquery.datatables.css';
@Component({
  selector: 'app-head-office',
  templateUrl: './head-office.component.html',
  styleUrls: ['./head-office.component.css']
})
export class HeadOfficeComponent implements OnInit , AfterViewChecked  {

  steps :any = 1;
  // constructor() { }
  constructor()
  {
  }
  ngAfterViewChecked() {
    $(".data-table").DataTable();
  }


  ngOnInit(): void {
  //   $(document).on('change', '.file_input_val', function() {
  //     var file_name = $(this).val();
  //     var file_path = $(this).parent().find('.file_uploader');
  //     file_path.text(file_name);
  // });

    $(document).on('click', 'input[type="radio"]', () => {
      if ($(".other_radio").is(":checked")) {
          $(this).parent().parent().find('.other_text_box').fadeIn();
      }
      else {
          $(".other_text_box").hide();
      }
    });

  }
  submit(){
    this.steps = this.steps + 1;
  }
  previous(){
    this.steps = this.steps - 1;
  }

  // this.loadScript();
  // loadComponent = true;
  // loadScript(){
  //   //  debugger;
  //   let scriptTag = document.createElement("script");
  //   scriptTag.type = "text/javascript";
  //   scriptTag.src = "/src/assets/multi-form.js";
  //   this.elementRef.nativeElement.appendChild(scriptTag);
  // }
  // ngOnInit(): void {
  // }

}
