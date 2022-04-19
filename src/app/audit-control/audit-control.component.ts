import { Component, OnInit ,AfterViewChecked} from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-audit-control',
  templateUrl: './audit-control.component.html',
  styleUrls: ['./audit-control.component.css']
})
export class AuditControlComponent implements OnInit ,AfterViewChecked{
  steps :any = 1;
  constructor() { }

  ngAfterViewChecked() {
    $(".data-table").DataTable();
  }
  ngOnInit(): void {
  }
  submit(){
    this.steps = this.steps + 1;
  }
  previous(){
    this.steps = this.steps - 1;
  }

}
