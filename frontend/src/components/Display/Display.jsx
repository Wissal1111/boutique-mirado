import Item from '../Items/Item';
import pyj1img from '../../assets/pyj1.png';
import bad1img from '../../assets/bad1.png';
import pyj2img from '../../assets/pyj2.png';
import bad2img from '../../assets/bad2.png';

export default function Display() {
  const products = [
    { id: 1, name: 'Pyjama', price: 2500, image: pyj1img ,isNew: true, discount: 0},
    { id: 2, name: 'Bad3iya', price: 3500, image: bad1img, isNew: true,discount: 0 },
    { id: 3, name: 'Pyjama', price: 2500, image: pyj2img,isNew: true ,discount: 0 },
    { id: 4, name: 'Bad3iya', price: 3500, image: bad2img, isNew: true,discount: 0 },
    { id: 4, name: 'Bad3iya', price: 3500, image: bad2img, isNew: true,discount: 0 },
  ];
  return(
    <>
    {products.map(item => (
            <Item key={item.id} item={item} />
          ))}
    </>
  )}