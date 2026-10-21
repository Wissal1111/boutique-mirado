import './Collection.css';
import CollectionCard from './CollectionCard';
import pyjamaimg from '../../assets/pyjamascol.png';
import bad3iyaimg from '../../assets/bad3iyacol.png';
export default function Collection() {
  return (
    <div className="collection">
      <CollectionCard collection={{ name: 'Pyjamas', image: pyjamaimg }} />
      <CollectionCard collection={{ name: 'Bad3iya', image: bad3iyaimg }} />

    </div>
  );
}