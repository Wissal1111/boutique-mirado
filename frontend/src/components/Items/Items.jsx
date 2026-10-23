import './Items.css';
import Item from './Item';
import pyj1img from '../../assets/pyj1.png';
import bad1img from '../../assets/bad1.png';
import pyj2img from '../../assets/pyj2.png';
import bad2img from '../../assets/bad2.png';

export default function Items() {
  const items = [
    { id: 1, name: 'Pyjama', price: 2500, image: pyj1img },
    { id: 2, name: 'Bad3iya', price: 3500, image: bad1img },
    { id: 3, name: 'Pyjama', price: 2500, image: pyj2img },
    { id: 4, name: 'Bad3iya', price: 3500, image: bad2img },



  ];

  return (<div className='section'>
  <div className="content">
    <div className="title">
    <h3>Nouveautés</h3>
    <span>Voir tout →</span>
  </div>
    <div className="items">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  </div>
    </div>
  );
}