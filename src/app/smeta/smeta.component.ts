import { Component , OnInit ,ElementRef, Inject, AfterViewChecked} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// import * as $ from 'jquery';
declare const $:any;

@Component({
  selector: 'app-smeta',
  templateUrl: './smeta.component.html',
  styleUrls: ['./smeta.component.css']
})
export class SmetaComponent implements OnInit , AfterViewChecked {
  steps: any = 1;
  url = 'https://jsonplaceholder.typicode.com/todos';
  items : any[] = [];
  constructor(private http: HttpClient)
  {
    this.http.get(this.url).toPromise().then(data=>{
      console.log(data);
      for (let key in data) {
       if(data.hasOwnProperty(key))
         this.items.push(data[key]);
      }
    })
  }
addFormField() {
  var dataId = $('.variationinp');
  var data_id;
  if (dataId.length >= 1) {
      data_id = dataId.length + 1;
  } else {
      data_id = 1;
  }
  $("#fielddiv").append('<div class="col-md-12 variationinp px-0" id="' + data_id + '" ><div class="form-group"><div class="d-flex" id="fields"><div class="w-100"><input type="text" name="variations[]" required placeholder="Variation Value" value="" class="form-control shadow-none"></div><div class=""><a href="javascript:void(0);" data-id="' + data_id + '" class="btn remove"><div class="glyph-icon simple-icon-close"></div></a></div></div></div></div>');
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
    console.log("Correct");
    var id = $(this).data('id');
    $('#' + id).remove();
  });
//   $(document).on('change', '.file_input_val', function() {
//     var file_name = $(this).val();
//     $(this).parent().find('.file_uploader').text(file_name);
// });
}

}
