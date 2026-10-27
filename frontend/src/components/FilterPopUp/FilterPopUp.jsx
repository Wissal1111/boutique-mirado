
import './FilterPopUp.css'
import Filter from '../Filter/Filter'
import Close from '../../icons/Close'

export default function FilterPopUp({ onChange, onClose }) {
    return (
        <div
            className="filter-popup-overlay"
            onClick={onClose}
        >
            <div
                className="filter-popup"
                onClick={e => e.stopPropagation()}
            >
                <div className="filter-popup-header">
                    <h3>Filtres</h3>

                    <button
                        type="button"
                        className="filter-popup-close"
                        onClick={onClose}
                        aria-label="Fermer les filtres"
                    >
                        <Close />
                    </button>
                </div>

                <div className="filter-popup-content">
                    <Filter onChange={onChange} />
                </div>

                <div className="filter-popup-footer">
                    <button
                        type="button"
                        className="filter-popup-apply"
                        onClick={onClose}
                    >
                        Appliquer
                    </button>
                </div>
            </div>
        </div>
    )
}
