import backEndapi from '../images/backend-api.jpg';
import bookSearch from '../images/book-search.jpg';
import ecommerceFrontEnd from '../images/ecommerce-front-end.jpg';
import jsQuiz from '../images/js-quiz.jpg';
import weatherApp from '../images/weather-app.jpg';
import helloSowftware from '../images/helloSoftware.jpg';

const AllProjects = [
  {
    id: '1',
    name: 'Ecommerce Front-End',
    ImageUrl: ecommerceFrontEnd,
    description:
      'A react made front end ecommerce page that allows the user to filter through' + 
      ' mens and womens clothes. ',
    gitHubUrl: 'https://github.com/jweah2385/React-ecommerce',
    deploymentUrl: 'https://react-ecommerce-sigma-rosy.vercel.app/',
  },
  

  {
    id: '3',
    name: 'JavaScript Quiz',
    ImageUrl: jsQuiz,
    description:
      'A javascript quiz that uses local storage and dom manipulation in order to save the user score and name.',
    gitHubUrl: 'https://github.com/jweah2385/code-Quiz',
    deploymentUrl: 'https://jweah2385.github.io/code-Quiz/',
  },

  {
    id: '6',
    name: 'Backend Api',
    ImageUrl: backEndapi,
    description:
      'This backend epi uses mongodb and mongoose to applement the CRUD system, in order to post delete read and update, data on a user, thoughts, friends and reaction.',
    gitHubUrl: 'https://github.com/jweah2385/nosql-network-api',
  },
];

export default AllProjects;
