import './Items.css';
import Item from './Item';
import pyj1img from '../../assets/pyj1.png';
import bad1img from '../../assets/bad1.png';
import pyj2img from '../../assets/pyj2.png';
import bad2img from '../../assets/bad2.png';

export default function Items() {
  const nouveautes = [
    { id: 1, name: 'Pyjama', price: 2500, image: pyj1img ,isNew: true, discount: 0},
    { id: 2, name: 'Bad3iya', price: 3500, image: bad1img, isNew: true,discount: 0 },
    { id: 3, name: 'Pyjama', price: 2500, image: pyj2img,isNew: true ,discount: 0 },
    { id: 4, name: 'Bad3iya', price: 3500, image: bad2img, isNew: true,discount: 0 },
  ];
  const promotions = [
    { id: 1, name: 'Pyjama', price: 2500, image: pyj1img , isNew: true, discount: 10},
    { id: 2, name: 'Bad3iya', price: 3500, image: bad1img, isNew: false, discount: 20 },
    { id: 3, name: 'Pyjama', price: 2500, image: pyj2img, isNew: false, discount: 5  },
    { id: 4, name: 'Bad3iya', price: 3500, image: bad2img, isNew: false, discount: 30 },
  ];

  return (<div className='section'>
  <div className="content">
    <div className="title">
    <h3>Nouveautés</h3>
    <span>Voir tout →</span>
  </div>
    <div className="items">
      {nouveautes.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
    
  </div>
  <div className="content">
    <div className="title">
    <h3>Promotions</h3>
    <span>Voir tout →</span>
  </div>
    <div className="items">
      {promotions.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  </div>
    </div>
  );
}