import './CollectionCard.css';
export default function CollectionCard({ collection }) {
  return (
    <div className="collection-card">
      <img src={collection.image} alt={collection.name} />
      <h3>{collection.name}</h3>
      <span >Voir la collection →</span>
    </div>
  );
}