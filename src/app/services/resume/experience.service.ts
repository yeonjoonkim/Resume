import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  public experience = [
    {
      company: 'Otraco International Pty Ltd',
      position: 'Full Time',
      role: 'Junior Soft Developer',
      suburb: 'Brisbane, QLD',
      startDate: 'FEB 2022',
      endDate: 'Current',
      responsbilities: [
        'Modify, repair, or expand existing programs to correct errors, increase efficiency, upgrade interfaces, or improve performance.',
        'Design and develop back end Microsoft C# logic.',
        'Design and develop front end Angular web logic',
        'Design and develop back end Microsoft SQL Server database objects',
        'Identify technical issues with the software and communicate them effectively',
        'Assisting the manager with aspects of software design and coding.',
        'Participate in daily Scrum meetings.',
      ],
      hastagSkills: [
        '#dotnet', '#angular', '#communication', '#api', '#typescript','#jira', '#agile'
      ]
    },
    {
      company: 'Prolist',
      position: 'Internship',
      role: 'Front End Developer',
      suburb: 'Portsmith, QLD',
      startDate: 'NOV 2021',
      endDate: 'JAN 2022',
      responsbilities: [
        'Improved and designed new layouts to achieve usability and performance objectives.',
        'Designed wireframes and prototypes based on goals and needs for organization.',
        'Brought mock-ups to life with Vue, HTML, CSS and JavaScript.',
        'Applied jQuery scripts for basic animation and end-user screen customization purposes.',
        'Integrated backend data services to expand available resources within software.',
        'Troubleshot, tested and remedied issues before software deployment.',
        'Defined and conducted design processes at all stages, including research, conceptualization, testing and implementation.'
      ],
      hastagSkills: [
        '#vue', '#html', '#css', '#api', '#javascript','#communication', '#agile'
      ]
    },
    {
      company: 'Happytel Retail Group Pty Ltd',
      position: 'Casual',
      role: 'Smartphone Specialist',
      suburb: 'Smithfield, QLD',
      startDate: 'JUN 2021',
      endDate: 'JAN 2022',
      responsbilities: [
        'Listened to clients needs and assisted with identifying and securing appropriate services.',
        'Offered clients knowledgeable and supportive assistance to meet needs and build loyalty.',
        'Adhered to guidelines and enabled compatibility through analysis and troubleshooting.',
        'Stayed up to date on latest market trends, standard practices and compliance requirements.',
        'Enabled sales growth by highlighting features and benefits of company offerings.',
        'Identified needs of customers promptly and efficiently.',
        'Analyzed operational performance to identify pain points and provided actionable solutions to management.',
        'Assist the manager in the day to day operations of the store.',
      ],
      hastagSkills: [
        '#communication', '#customerservice', '#hardware', '#sales', '#teamwork'
      ]
    },
    {
      company: 'Order Now',
      position: 'Internship',
      role: 'Front End Developer',
      suburb: 'Cairns, QLD',
      startDate: 'APR 2021',
      endDate: 'NOV 2021',
      responsbilities: [
        'Built an application with Ionic framework, Angular, HTML, CSS and Typescript.',
        'Implemented web design and development principles to build stable software.',
        'Applied jQuery scripts for basic animation and end-user screen customization purposes.',
        // eslint-disable-next-line max-len
        'Translated concepts into user flows, wireframes, mockups and prototypes to promote positive intuitive designs, site interactions and user experiences.',
        'Troubleshot, tested and remedied issues before software deployment.',
        'Collaborated with customers to determine needs and work through design options.'
      ],
      hastagSkills: [
        '#typescript', '#html', '#scss', '#firebase', '#ionic', '#teamwork'
      ]
    },
    {
      company: 'Hi Cairns Family Pty Ltd',
      position: 'Full-Time',
      role: 'Office Manager',
      suburb: 'Cairns, QLD',
      startDate: 'MAY 2016',
      endDate: 'MAR 2021',
      responsbilities: [
        'Updated details in company database by keying in customer contacts and delivery dates.',
        'Handled scheduling and managed timely and effective allocation of resources and calendars.',
        'Trained and mentored administrative staff members in company policies, daily task execution and industry best practices.',
        'Oversaw receiving and organizing correspondence, answering and forwarding calls and creating business letters and records.',
        'Handled travel arrangements for groups, couples, executives and special needs clients.',
        'Addressed client inquiries and resolved issues and complaints regarding various travel arrangements.',
        // eslint-disable-next-line max-len
        'Sustained operational efficiencies, coordinating domestic/international customer travel accommodations while managing airfare, hotel bookings and rental car reservations.',
        'Managed campaign development, creative designs and ad tracking.'
      ],
      hastagSkills: [
        '#tourism', '#advertisement', '#administration', '#problem-solving', '#marketing'
      ]
    },{
      company: 'Hi Cairns Family Pty Ltd',
      position: 'Casual',
      role: 'Student / Tour Consultant',
      suburb: 'Cairns, QLD',
      startDate: 'MAR 2014',
      endDate: 'JUN 2015',
      responsbilities: [
        'Responded immediately to clients questions, issues, and complaints and found effective solutions when required.',
        'Handled travel arrangements for groups, couples, executives and special needs clients.',
        'Took payments via credit and debit cards and handled sensitive information with professionalism and discreteness.',
        // eslint-disable-next-line max-len
        'Sustained operational efficiencies, coordinating domestic/international customer travel accommodations while managing airfare, hotel bookings and rental car reservations.',
        'Asked open-ended questions to best understand client needs and determine best travel offerings.',
        'Explained benefits of purchasing travel insurance with clients.'
      ],
      hastagSkills: [
        '#tourism', '#marketing', '#administration', '#problem-solving'
      ]
    },
  ];

  constructor() { }

  getList(){
    return this.experience;
  }
}
