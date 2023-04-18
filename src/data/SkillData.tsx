import type { SkillDataType } from '../types/SkillDataType';

const SkillData: SkillDataType[] = [
  {
    group: 'Backend',
    color: 'purple',
    details: [
      { name: 'NodeJS (Express / Koa)', score: 1 },
      { name: 'Python (Django)', score: 1 },
      { name: 'OpenId Connect', score: 0.95 },
      { name: 'Nginx', score: 0.9 },
      { name: 'Redis', score: 0.85 },
      { name: 'MongoDB', score: 0.85 },
      { name: 'PostgresDB', score: 0.8 },
      { name: 'Java (Springboot)', score: 0.7 }
    ]
  },
  {
    group: 'DevOps',
    color: 'red',
    details: [
      { name: 'Docker', score: 1 },
      { name: 'Docker Compose', score: 1 },
      { name: 'AWS', score: 0.8 },
      { name: 'Circle CI', score: 0.75 },
      { name: 'Azure', score: 0.7 },
      { name: 'OpenShift (Kubernete)', score: 0.65 },
      { name: 'Jenkins', score: 0.6 },
      { name: 'Travis CI', score: 0.4 }
    ]
  },
  {
    group: 'Data',
    color: 'orange',
    details: [
      { name: 'Azure DataBricks', score: 1 },
      { name: 'Apache Spark', score: 0.9 },
      { name: 'Machine Learning', score: 0.75 },
      { name: 'Scala', score: 0.3 }
    ]
  },
  {
    group: 'Frontend',
    color: 'blue',
    details: [
      { name: 'React', score: 0.8 },
      { name: 'GatsbyJS', score: 0.7 },
      { name: 'NextJS', score: 0.35 },
      { name: 'ejs', score: 0.3 }
    ]
  }
]

export default SkillData;