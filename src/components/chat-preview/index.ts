import Handlebars from 'handlebars';
import './chat_preview.css';
export { default as ChatPreview } from './chat_preview.hbs?raw';

Handlebars.registerHelper('message_preview_mock', () => {
  return [
    { name: 'Иван', message: 'Привет', time: '10:49', count: '4' },
    { name: 'Петя', message: 'Хорошо', time: 'Пн', count: '2' },
    { name: 'Маша', message: 'Как дела?', time: 'Вс', count: '3' },
    {
      name: 'Лена',
      message: 'Что делаешь?',
      time: '1 мая 2020',
      count: '',
    },
  ];
});
