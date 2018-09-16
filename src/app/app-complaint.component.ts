import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {NgModule} from '@angular/core';
import {st} from '@angular/core/src/render3';

@Component({
  selector: 'app-complaint',
  templateUrl: 'app-complaint.component.html',
  styleUrls: ['app-complaint.component.css']
})
export class AppComplaintComponent implements OnInit {
  abonent = {num: '', name: '', address: ''
    , date: '', compl: '',
    disstaff: '', advice: '', status: '', category: '', complited: '', distype: ''
  };
  complaintsList = [
    { num: 'CQ3/12', name: 'Brian', address: '8 View St, Dunedin, 9016', date: '22/02/2015', compl: 'Flicking during mornig',
      disstaff: 'NF', advice: '12/03/2015', status: 'Finish', category: 'LV', complited: '12/03/2015', distype: 'Low'},
    { num: '03452', name: 'Mr. Peter', address: '49 Riselaw Rd, Calton Hill, Dunedin 9012', date: '11/12/2011', compl: 'Low voltage',
      disstaff: 'BDD', advice: '02/01/2012', status: 'Finish', category: 'N/A', complited: '13/12/2011', distype: 'FCK'},
    { num: '03025', name: 'Janet', address: '22 Hunt St, Andersons Bay, Dunedin 9013', date: '01/06/2014',
      compl: 'Check out all commection',
      disstaff: 'JP', advice: '-', status: 'Finish', category: 'NFAULT', complited: '03/06/2014', distype: 'Low'},
    { num: 'ZQ6/31', name: 'John', address: '2 Leight St, Dunedin, 9016', date: '22/02/2014', compl: 'Omega Installed',
      disstaff: 'NF', advice: '12/03/2015', status: 'Finish', category: 'LV', complited: '22/03/2014', distype: 'FCK'},
    { num: '04234', name: 'Sienna', address: '46 Morning St, Dunedin, 9016', date: '22/01/2015', compl: 'As Phase 10V Down ',
      disstaff: 'NF', advice: '27/01/2015', status: 'Finish', category: 'LV', complited: '02/02/2015', distype: '-'},
    { num: 'ZZW/12', name: 'Nick', address: '61 Princess Street, Dunedin, 9013', date: '17/04/2015', compl: 'Flicking during mornig',
      disstaff: 'NF', advice: '-', status: 'Finish', category: 'JP', complited: '12/05/2015', distype: 'Low'}
  ];
  addComplaint() {
    this.complaintsList.push(this.abonent);
    this.abonent = {num: '', name: '', address: ''
      , date: '', compl: '',
      disstaff: '', advice: '', status: '', category: '', complited: '', distype: ''
    };
  }

  constructor() {}

  ngOnInit() {}
  onSelectRow(num, name, address, date, compl, disstaff, advice, status, category, complited, distype ) {
    /*this.complaintsList.push({num, name, address, date, compl, disstaff, advice, status, category, complited, distype});*/
    this.abonent.num = num;
    this.abonent.name = name;
    this.abonent.address = address;
    this.abonent.date = date;
    this.abonent.compl = compl;
    this.abonent.disstaff = disstaff;
    this.abonent.advice = advice;
    this.abonent.status = status;
    this.abonent.category = category;
    this.abonent.complited = complited;
    this.abonent.distype = distype;
  }
}
