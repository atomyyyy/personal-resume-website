import type { ExperienceDataType } from '../types/ExperienceDataType';

const ExperienceData: ExperienceDataType[] = [
  {
    name: 'Accenture Technology',
    country: 'Hong Kong',
    startDate: new Date(2021,4),
    description: [
      'Data Engineering Specialist',
      'Implement analytic data platform',
      'System revamp for enterprise client'
    ]
  },
  {
    name: 'HK01 Company Limited',
    country: 'Hong Kong',
    startDate: new Date(2020,4),
    endDate: new Date(2021,1),
    description: [
      'Software Engineer',
      'Implement self-host OIDC application',
    ]
  },
  {
    name: 'Seasonalife Limited',
    country: 'Hong Kong',
    startDate: new Date(2018,1),
    endDate: new Date(2020,4),
    description: [
      'Junior Software Engineer & Data Scientist',
      'Early member of a startup insurtech company',
    ]
  }
]

export default ExperienceData;