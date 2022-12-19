import React from 'react';
import './App.scss'
import { useInView } from 'react-intersection-observer';
import One from './assets/1.jpg';
import Two from './assets/2.jpg';
import Three from './assets/3.jpg';
import For from './assets/4.jpg';
import Five from './assets/5.jpg';
import { Photo } from './components/Photo';


// Itresection Observer Api - специальные API для того что бы не делать вещи которые описаны ниже.
// Позволяет нам понять если какой нибудь html элемент в области видимости. Является более правильным
// решением чем то которое ниже. Можно использовать для отложенной загрузки изображений.

// Не правильно

// React.useEffect(() => {
//   const app = document.querySelector('.App');
//   const appStyle = app && window.getComputedStyle(app, null);

//   app?.addEventListener('scroll', () => {
//     const elem = document.querySelector('.section-2');

//     const position = elem?.getBoundingClientRect();

//     if(appStyle && position && position.top < Number(appStyle?.getPropertyValue('heigth'))){
//       elem?.classList.add('active');
//     }

//   });
// }, [])


function App() {
  const images = [One, Two, Three, For, Five];

  const [active, setActive] = React.useState<boolean>();
  const { ref, inView } = useInView({
    threshold: 0.5, // показываем на сколько процентов
    triggerOnce: true
  })

  React.useEffect(() => {
    inView && setActive(inView);
  }, [inView]) // inView устанавливается в true когда элемент показан на 50%

  return (
    <div className='App'>
      {images && images.map((item) => {
        return <Photo key={item} src={item}/>;
      })}
    </div>
  )
}

export default App
