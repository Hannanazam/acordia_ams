import { Component , OnInit ,ElementRef, Inject, AfterViewChecked} from '@angular/core';
import { DOCUMENT } from '@angular/common';
declare const $:any;
@Component({
  selector: 'app-wrap',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.css']
})
export class WrapComponent implements OnInit ,AfterViewChecked {

  steps: any = 1;

  constructor() {
   }
   addFormField() {
    //  debugger;
    var dataId = $('.variationinp');
    var data_id;
    if (dataId.length >= 1) {
        data_id = dataId.length + 1;
    } else {
        data_id = 1;
    }
    $("#fielddiv").append('<div class="col-md-12 variationinp px-0" id="' + data_id + '" ><div class="form-group"><div class="d-flex" id="fields"><div class="w-100 d-flex"><input type="text" name="variations[]" required placeholder="Sub Clauses" value="" class="form-control shadow-none"><button type="button" class="action-button mt-0 font-size-11" (click)="addFormField()">Add SubClauses</button></div><div class=""></div></div></div></div>');
  }
  ngAfterViewChecked() {
    $(".data-table").DataTable();
  }
  submit(){
    this.steps = this.steps + 1;
  }
  previous(){
    this.steps = this.steps - 1;
  }
  ngOnInit(): void {
    $(document).on('click', '.remove', () => {
      var id = $(this).data('id');
      $('#' + id).remove();
    });

    $(document).on('click', '.add_clause', () => {
      // var title = $(this).parent().find('.clause_title').val();
      var title = $('.clause_title').val();
      if(title == ''){
        alert("Please write Something!");
      }
      else{
      console.log(title);
      var dataId = $('.variationinp');
      var data_id;
      if (dataId.length >= 1) {
          data_id = dataId.length + 1;
      } else {
          data_id = 1;
      }
      $("#fielddiv").append('<div class="col-md-12 variationinp px-0" id="' + data_id + '" ><div class="form-group"><div class="d-flex" id="fields"><div class="w-100 d-flex"><input type="text" name="variations[]" required placeholder="' + title + '" value="" class="form-control shadow-none"><button type="button" class="action-button mt-0 font-size-11" (click)="addFormField()">Add SubClauses</button></div><div class=""></div></div></div></div>');
      $('.clause_title').val('');
      // $('#' + id).remove();
    }
    });
  }
}
