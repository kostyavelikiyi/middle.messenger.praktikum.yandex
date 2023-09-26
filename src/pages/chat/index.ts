import Handlebars from 'handlebars';
import './chat.css';
export { ChatPage as default } from './chat';

Handlebars.registerHelper('message_preview_mock', () => {
  return [
    { name: 'Иван', message: 'Привет', time: '10:49', count: 4 },
    { name: 'Петя', message: 'Хорошо', time: 'Пн', count: 2 },
    { name: 'Маша', message: 'Как дела?', time: 'Вс', count: 3 },
    {
      name: 'Лена',
      message: 'Что делаешь?',
      time: '1 мая 2020',
      count: 0,
    },
    { name: 'Иван', message: 'Привет', time: '10:49', count: 4 },
    { name: 'Петя', message: 'Хорошо', time: 'Пн', count: 2 },
    { name: 'Маша', message: 'Как дела?', time: 'Вс', count: 3 },
    {
      name: 'Лена',
      message: 'Что делаешь?',
      time: '1 мая 2020',
      count: 0,
    },
  ];
});
