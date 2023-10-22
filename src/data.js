// import icons
import { BsCheck, BsChevronRight } from 'react-icons/bs';

// import images
import CourseImage1 from '../src/assets/img/courses/course-1.jpeg';
import CourseImage2 from '../src/assets/img/courses/course-2.jpeg';
import CourseImage3 from '../src/assets/img/courses/course-3.jpeg';
import CourseImage4 from '../src/assets/img/courses/course-4.jpeg';
import CourseImage5 from '../src/assets/img/courses/course-5.jpeg';
import CourseImage6 from '../src/assets/img/courses/course-6.jpeg';

export const navigation = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Classes',
    href: '#',
  },
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];

export const facts = [
  {
    startNumber: '1',
    endNumber: '3',
    unit: '',
    title: 'Years of Experience',
    desc: 'We have over 3 years of Experience yoga is language of art. We love to spread it.',
  },
  {
    startNumber: '1',
    endNumber: '200',
    unit: '',
    title: ' Happy trained students',
    desc: 'Additionally, positive feedback, testimonials, and high course completion rates can be an indication of happy and trained students.',
  },
  {
    startNumber: '1',
    endNumber: '4',
    unit: 'Y',
    title: 'Experienced Trainers',
    desc: 'Experienced trainers in Ayurveda have a deep understanding of Ayurvedic principles and techniques, and they can impart their knowledge and skills to students effectively, helping them become competent Ayurveda practitioners..',
  },
  {
    startNumber: '1',
    endNumber: '15',
    unit: '',
    title: 'Years of clinical experience',
    desc: 'Years of clinical experience in Ayurveda provide practitioners with a deep understanding of the practical application of Ayurvedic principles, allowing them to offer effective treatments and remedies to their clients.',
  },
];

export const courses = [
  {
    image: CourseImage1,
    title: 'Resortive Yoga Training & Immersion',
    desc: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '600',
  },
  {
    image: CourseImage2,
    title: 'Resortive Yoga Training & Immersion',
    desc: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '800',
  },
  {
    image: CourseImage3,
    title: 'Resortive Yoga Training & Immersion',
    desc: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '900',
  },
  
];

export const courses1 =[
  {
    image: CourseImage4,
    title: 'Resortive Yoga Training & Immersion',
    desc: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '600',
  },
  {
    image: CourseImage2,
    title: 'Resortive Yoga Training & Immersion',
    desc: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '800',
  },
  {
    image: CourseImage6,
    title: 'Resortive Yoga Training & Immersion',
    desc: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '900',
  },
];

export const pricing = [
  {
    title: 'Beginner',
    price: '1000₹',
    list: [
      {
        icon: <BsCheck />,
        name: 'Pay as you go',
      }, 
      {
        icon: <BsCheck />,
        name: 'Acces to all classes',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '600',
  },
  {
    title: 'Intermidiate',
    price: '1500₹',
    list: [
      {
        icon: <BsCheck />,
        name: 'Pay as you go',
      },
      {
        icon: <BsCheck />,
        name: 'Perfect for non-residence',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all classes',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '800',
  },
  {
    title: 'Expert',
    price: '2000₹',
    list: [
      {
        icon: <BsCheck />,
        name: 'Pay as you go',
      },
      {
        icon: <BsCheck />,
        name: 'Perfect for non-residence',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all classes',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all mentors',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '900',
  },
];
