import { useState, useEffect } from 'react'
import './Filter.css'

const CATEGORIES = ["Pyjama", "Bad3iya"]
const TAILLES = ["S", "M", "L", "XL", "XXL", "XXXL"]
const COULEURS = [
    "#000000", "#23395B", "#386641", "#722F37",
    "#805A46", "#A3B18A", "#A6A6A6", "#A7C7E7",
    "#B83A4B", "#B8A1D9", "#D8A0AD", "#D8C3A5",
    "#E9A6BC", "#F2D16B", "#F5E6CC", "#FFFFFF",
]

function Option({ opt, checked, onToggle }) {
    return (
        <div className="option" onClick={() => onToggle(opt)}>
            <div className={`square ${checked ? 'checked' : ''}`}></div>
            <span>{opt}</span>
        </div>
    )
}

function CategoriesFiltre({ selected, onToggle }) {
    return (
        <div className="filter-cat">
            <h4>Catégories</h4>
            {CATEGORIES.map(c => (
                <Option key={c} opt={c} checked={selected.includes(c)} onToggle={onToggle} />
            ))}
        </div>
    )
}

function TailleFiltre({ selected, onToggle }) {
    return (
        <div className="filter-taille">
            <h4>Taille</h4>
            <div className="taille-opts">
                {TAILLES.map(t => (
                    <Option key={t} opt={t} checked={selected.includes(t)} onToggle={onToggle} />
                ))}
            </div>
        </div>
    )
}

function PrixFiltre({ min, max, onMin, onMax }) {
    return (
        <div className="filter-prix">
            <h4>Prix</h4>
            <div className="price-range">
                <div className="price-input">
                    <input type="number" min="0" value={min} onChange={e => onMin(e.target.value)} />
                    <div className="da">DA</div>
                </div>
                <div className="a">à</div>
                <div className="price-input">
                    <input type="number" min="0" value={max} onChange={e => onMax(e.target.value)} />
                    <div className="da">DA</div>
                </div>
            </div>
        </div>
    )
}

function ColorOption({ color, checked, onToggle }) {
    return (
        <div
            className={`color-square ${checked ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            title={color}
            onClick={() => onToggle(color)}
        ></div>
    )
}

function CouleursFiltre({ selected, onToggle }) {
    return (
        <div className="filter-couleurs">
            <h4>Couleurs</h4>
            <div className="couleurs-opts">
                {COULEURS.map(c => (
                    <ColorOption key={c} color={c} checked={selected.includes(c)} onToggle={onToggle} />
                ))}
            </div>
        </div>
    )
}

export default function Filter({ onChange }) {
    const [categories, setCategories] = useState([])
    const [tailles, setTailles] = useState([])
    const [couleurs, setCouleurs] = useState([])
    const [prixMin, setPrixMin] = useState('')
    const [prixMax, setPrixMax] = useState('')

    // add if missing, remove if present
    const toggle = (setter) => (value) =>
        setter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value])

    // send the current filters to the parent whenever something changes
    useEffect(() => {
        onChange?.({ categories, tailles, couleurs, prixMin, prixMax })
    }, [categories, tailles, couleurs, prixMin, prixMax])

    return (
        <div className="filter">
            <CategoriesFiltre selected={categories} onToggle={toggle(setCategories)} />
            <TailleFiltre selected={tailles} onToggle={toggle(setTailles)} />
            <PrixFiltre min={prixMin} max={prixMax} onMin={setPrixMin} onMax={setPrixMax} />
            <CouleursFiltre selected={couleurs} onToggle={toggle(setCouleurs)} />
        </div>
    )
}