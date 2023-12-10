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
      ' mens and womens clothes ',
    gitHubUrl: 'https://github.com/jweah2385/React-ecommerce',
    deploymentUrl: 'https://react-ecommerce-sigma-rosy.vercel.app/',
  },
  {
    id: '2',
    name: 'Book Search',
    ImageUrl: bookSearch,
    description:
      'This is a book search application that allows the user to sign in, search for their book of choice and add it to their saved collection.',
    gitHubUrl: 'https://github.com/jweah2385/book-search-api1',
    deploymentUrl: 'https://book-search-api2-f92e504c17b9.herokuapp.com/',
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
    id: '4',
    name: 'Weather App',
    ImageUrl: weatherApp,
    description:
      'This weather app searches for the inserted destination and provides the current weather along with the forcast in the next five days.',
    gitHubUrl: 'https://github.com/jweah2385/weather-app',
    deploymentUrl: 'https://jweah2385.github.io/weather-app/',
  },
  {
    id: '5',
    name: 'Hello Software',
    ImageUrl: helloSowftware,
    description:
      'This group application sells tutoring services to the user which can then be checked out by stripe.',
    gitHubUrl: 'https://github.com/Hans-Doderlein/Hello-Software',
    deploymentUrl: 'https://hello-software-37812ef8ef64.herokuapp.com/',
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
