import type { EducationDataType } from '../types/EducationDataType';

const EducationData: EducationDataType[] = [
  {
    name: 'Chinese University of Hong Kong',
    startDate: new Date(2013,8),
    endDate: new Date(2018,10),
    description: [
      'B.Sc (First-Class Honours) Quantitative Finance',
      'Minor in Statistics, Computer Science'
    ]
  },
  {
    name: 'Lund University',
    country: 'Sweden',
    startDate: new Date(2016,0),
    endDate: new Date(2016,5),
    description: [
      'School of Economics and Management',
      'Exchange Semester',
    ]
  }
]

export default EducationData;