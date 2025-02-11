export type ExperiencesType = {
  start_date: Date;
  end_date: Date;
  company_name: string;
  description: string;
};

export const MyExperiences = [
  {
    id: 1,
    start_date: new Date('2023/09/01'),
    end_date: new Date(),
    company_name: 'Name 01',
    description:
      'The primary job involves software development. Utilizing technologies such as HTML, CSS, JavaScript (along with frameworks and libraries like React, Material UI, Styled Components, React Hook Form, etc.) to build website interfaces, alongside proposing optimizations for user experience.',
  },
  {
    id: 2,
    start_date: new Date('2023/09/01'),
    end_date: new Date('2023/06/23'),
    company_name: 'Name 02',
    description:
      'The primary job involves software development. Utilizing technologies such as HTML, CSS, JavaScript (along with frameworks and libraries like React, Material UI, Styled Components, React Hook Form, etc.) to build website interfaces, alongside proposing optimizations for user experience.',
  },

  {
    id: 3,
    start_date: new Date('2023/09/01'),
    end_date: new Date('2023/06/23'),
    company_name: 'Name 03',
    description:
      'The primary job involves software development. Utilizing technologies such as HTML, CSS, JavaScript (along with frameworks and libraries like React, Material UI, Styled Components, React Hook Form, etc.) to build website interfaces, alongside proposing optimizations for user experience.',
  },
  {
    id: 4,
    start_date: new Date('2023/09/01'),
    end_date: new Date('2023/06/23'),
    company_name: 'Name 04',
    description:
      'The primary job involves software development. Utilizing technologies such as HTML, CSS, JavaScript (along with frameworks and libraries like React, Material UI, Styled Components, React Hook Form, etc.) to build website interfaces, alongside proposing optimizations for user experience.',
  },
  {
    id: 5,
    start_date: new Date('2023/09/01'),
    end_date: new Date('2023/06/23'),
    company_name: 'Name 05',
    description:
      'The primary job involves software development. Utilizing technologies such as HTML, CSS, JavaScript (along with frameworks and libraries like React, Material UI, Styled Components, React Hook Form, etc.) to build website interfaces, alongside proposing optimizations for user experience.',
  },
];

export interface PropsTypeNotify {
  type: string;
  message?: string;
  duration?: number;
}
