export type ExperiencesType = {
  start_date: Date;
  end_date: Date;
  company_name: string;
  role: string;
  responsibilities: Array<string>;
  link: string;
  bases: Array<string>;
  about: Array<string>;
};

export const MyExperiences = [
  {
    id: 1,
    start_date: new Date('2023/09/01'),
    end_date: new Date(),
    company_name: 'DINH ANH JOINT STOCK COMPANY',
    link: 'https://muaban.net',
    role: 'Front-End Developer - Website',
    responsibilities: [
      'Built responsive web forms from product team designs.',
      'Proposed improvements & solved complex issues.',
      'Write technical documentation for the Backend based on the Product documentation.',
      'Enhanced performance & optimized dev practices.',
    ],
    bases: [
      'JavaScript',
      'ReactJS',
      'NextJS',
      'MUI IU',
      'Redux',
      'React Hook Form',
      'Styled-components',
      'RESTful API',
      'Cloudflare',
      'CSS Modules',
      'Git',
      'Bundle size',
      'SEO',
    ],
    about: [
      "Muaban.net is Vietnam's leading classified advertising platform that has been operating since 1998.",
      'Serves as a comprehensive marketplace for various goods and services: Simple posting process, Multiple payment options, Advanced search functionality, 24/7 customer support.',
      'The platform serves both individual users and businesses looking to buy, sell, rent, or advertise their products and services.',
      'The website emphasizes free posting for many categories and provides a user-friendly interface for both buyers and sellers to connect efficiently in the Vietnamese market.',
    ],
  },
  {
    id: 2,
    start_date: new Date('2023/09/01'),
    end_date: new Date('2023/06/23'),
    company_name: 'KYANON DIGITAL',
    link: 'https://kyanon.digital',
    role: 'Front-End Developer - Application',
    responsibilities: [
      'Boosted user interaction by enhancing functionalities, increase in application responsiveness.',
      'Collaborated and shared experiences with the development team.',
      'Gained experience in project workflow, documentation, and writing maintainable code',
    ],
    bases: ['JavaScript', 'Typescript', 'React Native', 'Redux', 'HTML', 'CSS', 'SCSS', 'Git'],
    about: [
      'Kyanon Digital is a global technology consulting and software development company that specializes in delivering digital transformation solutions for enterprise clients, particularly.',
      'Kyanon Digital positions itself as a comprehensive digital transformation partner that combines technical expertise with business acumen to deliver measurable results for enterprise clients worldwide.',
    ],
  },
];

export interface PropsTypeNotify {
  type: string;
  message?: string;
  duration?: number;
}
