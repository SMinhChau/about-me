export type ExperiencesType = {
  start_date: Date;
  end_date: Date;
  company_name: string;
  role: string;
  responsibilities: Array<string>;
  link: string;
  base: string;
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
    base: 'JavaScript, ReactJS, NextJS, MUI IU, Redux, React Hook Form, Styled-components, RESTful API, Cloudflare, CSS Modules Git, Bundle size, SEO, ',
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
    base: 'JavaScript, Typescript, React Native, Redux, HTML, CSS, SCSS, Git',
  },
];

export interface PropsTypeNotify {
  type: string;
  message?: string;
  duration?: number;
}
