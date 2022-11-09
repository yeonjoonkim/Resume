import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationList = [
    {
      degree: 'Master of Information Technology',
      institution: 'Queesland of University',
      graduateDate: 'July 2022 - Current',
      status: 'Current',
      subject: [
        'Object Oriented Programming',
        'Data Exploration and Mining',
        'Web and Mobile App Development',
        'Information Security Management',
        'Advanced Networks',
        'Network Systems',
      ],hastag: [
        '#csharp',
        '#data',
        '#security',
        '#teamwork',
        '#objectorientedprograming',
        '#machinelearning',
        '#itsecurity',
        '#sql',
        '#teamwork',
        '#datamining'
      ]
    },
    {
      degree: 'Bachelor of Information Technology',
      institution: 'James Cook University',
      graduateDate: 'Sep 2018 - Feb 2022',
      status: 'Completed',
      subject: [
        'Web Design and Development',
        'Programing III',
        'Mobile Computing',
        'Advanced Software Engineering',
        'Network and Internet Security',
        'Collective Intelligence and Entrepreneurship',
        'Design Thinking',
        'E-strategic Management',
        'Database Modelling',
        'Data Mining',
        'Information Processing and Visualisation',
      ],hastag: [
        '#http',
        '#css',
        '#python',
        '#java',
        '#androidstuido',
        '#machinelearning',
        '#itsecurity',
        '#mysql',
        '#ecommerce',
        '#teamwork',
        '#datamining'
      ]
    },
    {
      degree: 'Diploma of Business',
      institution: 'Holmes Institute',
      graduateDate: 'Jun 2014 - May 2015',
      status: 'Completed',
      subject: [
        'Manage Quality Customer Service',
        'Manage Budgets and Financial Plans',
        'Manage People Performance',
        'Manage Operational Plan',
        'Manage Project',
        'Facilitate Continous Improvement',
        'Implement and Monitor Marketing Activities',
        'Undertake Marketing Activities',
        'Analyse Consumer Behaviour for Specific Markets',
        'Develop Teams and Individual'
      ],hastag: [
        '#customerservice',
        '#management',
        '#marketing',
        '#administration',
        '#financialplanning',
        '#projectmanagement',
        '#analysis',
        '#teamwork',
        '#evaluation'
      ]
    },
    {
      degree: 'High School',
      institution: 'Freshwater Christian College',
      graduateDate: 'Mar 2010 - Nov 2012',
      status: 'Completed',
      subject: ['Compeleted Year 11'],
    }
  ];

  constructor() { }

  getList(){
    return this.educationList;
  }
}
