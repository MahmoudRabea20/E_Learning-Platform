import { Component, OnInit } from '@angular/core';
import { ApiSubjectSrevice } from '../../services/api-subject-srevice';
import { ISubject } from '../../models/isubject';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit{

  currentId : number = 0;
  subject!: ISubject | undefined ;
  constructor(private apiSubjectService: ApiSubjectSrevice, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.currentId = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.subject = this.apiSubjectService.getSubjectById(this.currentId);
  }



}
