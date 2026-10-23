import './Item.css';
import Item from './Item';

export default function Items() {
  const items = [
    { id: 1, name: 'Pyjama', price: 2500, image: '/images/pyjama.webp' },
    { id: 2, name: 'Robe', price: 3500, image: '/images/bad3iya.webp' },
  ];

  return (
    <div className="items">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}