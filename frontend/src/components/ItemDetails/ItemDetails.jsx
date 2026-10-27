import './ItemDetails.css'
import Cart2 from '../../icons/Cart2';
import { useState, useEffect } from 'react';
import { WILAYAS } from './wilayas';

const COULEURS = [
    { hex: "#000000", name: "Noir" },
    { hex: "#23395B", name: "Bleu marine" },
    { hex: "#386641", name: "Vert foncé" },
    { hex: "#722F37", name: "Bordeaux" },
    { hex: "#805A46", name: "Marron" },
    { hex: "#A3B18A", name: "Vert sauge" },
    { hex: "#A6A6A6", name: "Gris" },
    { hex: "#A7C7E7", name: "Bleu ciel" },
    { hex: "#B83A4B", name: "Rouge" },
    { hex: "#B8A1D9", name: "Lavande" },
    { hex: "#D8A0AD", name: "Rose poudré" },
    { hex: "#D8C3A5", name: "Beige" },
    { hex: "#E9A6BC", name: "Rose" },
    { hex: "#F2D16B", name: "Jaune" },
    { hex: "#F5E6CC", name: "Crème" },
    { hex: "#FFFFFF", name: "Blanc" },
];

const TAILLES = ["S", "M", "L", "XL", "XXL", "XXXL"];

// ⚠️ Mesures TEMPORAIRES (en cm) : remplacez-les par celles de votre produit.
const GUIDE_TAILLES = [
    { size: "S",    poitrine: "88 - 92",   taille: "70 - 74",  hanches: "94 - 98" },
    { size: "M",    poitrine: "92 - 96",   taille: "74 - 78",  hanches: "98 - 102" },
    { size: "L",    poitrine: "96 - 100",  taille: "78 - 82",  hanches: "102 - 106" },
    { size: "XL",   poitrine: "100 - 106", taille: "82 - 88",  hanches: "106 - 112" },
    { size: "XXL",  poitrine: "106 - 112", taille: "88 - 94",  hanches: "112 - 118" },
    { size: "XXXL", poitrine: "112 - 118", taille: "94 - 100", hanches: "118 - 124" },
];

const fmt = (n) => n.toLocaleString('fr-FR');

function ColorOption({ color, checked, onToggle }) {
    return (
        <button
            type="button"
            className={`color-option ${checked ? 'selected' : ''}`}
            style={{ backgroundColor: color.hex }}
            title={color.name}
            aria-label={`Couleur ${color.name}`}
            aria-pressed={checked}
            onClick={() => onToggle(color)}
        />
    );
}

function SizeGuide({ onClose }) {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    return (
        <div className="guide-overlay" onClick={onClose}>
            <div
                className="guide-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="guide-title"
                onClick={(e) => e.stopPropagation()}
            >
                <button type="button" className="guide-close" onClick={onClose} aria-label="Fermer">
                    ×
                </button>
                <h3 id="guide-title">Guide des tailles</h3>
                <p className="guide-note">Mesures du corps en centimètres.</p>

                <div className="guide-table-wrap">
                    <table className="guide-table">
                        <thead>
                            <tr>
                                <th>Taille</th>
                                <th>Poitrine</th>
                                <th>Taille (ceinture)</th>
                                <th>Hanches</th>
                            </tr>
                        </thead>
                        <tbody>
                            {GUIDE_TAILLES.map(row => (
                                <tr key={row.size}>
                                    <td><strong>{row.size}</strong></td>
                                    <td>{row.poitrine}</td>
                                    <td>{row.taille}</td>
                                    <td>{row.hanches}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <ul className="guide-tips">
                    <li>Poitrine : mesurez à l'endroit le plus large, sans serrer.</li>
                    <li>Taille : mesurez à l'endroit le plus étroit du ventre.</li>
                    <li>Hanches : mesurez à l'endroit le plus large.</li>
                    <li>Entre deux tailles ? Prenez la plus grande.</li>
                </ul>
            </div>
        </div>
    );
}

export default function ItemDetails({ item }) {
    const hasDiscount = item.discount > 0;
    const finalPrice = hasDiscount
        ? Math.round(item.price * (1 - item.discount / 100))
        : item.price;

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState("S");
    const [wilayaCode, setWilayaCode] = useState("");
    const [deliveryType, setDeliveryType] = useState("domicile"); // "domicile" | "bureau"
    const [showGuide, setShowGuide] = useState(false);
    const [error, setError] = useState("");

    const wilaya = WILAYAS.find(w => String(w.code) === wilayaCode);
    const homePrice = wilaya ? wilaya.home : null;
    const deskPrice = wilaya ? wilaya.desk : null;
    const deliveryPrice = deliveryType === "domicile" ? homePrice : deskPrice;
    const total = deliveryPrice !== null ? finalPrice + deliveryPrice : null;

    function toggleColor(color) {
        setSelectedColor(prev => prev?.hex === color.hex ? null : color);
        setError("");
    }

    function toggleSize(size) {
        setSelectedSize(prev => prev === size ? null : size);
        setError("");
    }

    function handleCommander() {
        const missing = [];
        if (!selectedSize) missing.push("la taille");
        if (!selectedColor) missing.push("la couleur");
        if (!wilaya) missing.push("la wilaya");

        if (missing.length > 0) {
            setError(`Veuillez choisir : ${missing.join(", ")}.`);
            return;
        }

        setError("");
        // TODO: envoyer la commande (taille, couleur, wilaya, total) au backend
        console.log({ item: item.name, size: selectedSize, color: selectedColor.name, wilaya: wilaya.name, deliveryType, total });
    }

    return (
        <div className="item-details">
            <div className="images">
                <div className="big-img">
                    <img src={item.image} alt={item.name} />
                    {hasDiscount && (
                        <span className="promo-badge" aria-label={`Promotion : moins ${item.discount} pour cent`}>
                            -{item.discount}%
                        </span>
                    )}
                </div>
                <div className="other-imgs">
                    <img src={item.image} alt={item.name} />
                    <img src={item.image} alt={item.name} />
                    <img src={item.image} alt={item.name} />
                </div>
            </div>

            <div className="informations">
                <div className="info">
                    <div className="infohead">
                        <h2>{item.name}</h2>

                        {item.isNew && <h3 className="nouveau">Nouveau</h3>}

                        <div className="price">
                            <h3 className="current-price">{fmt(finalPrice)} DA</h3>
                            {hasDiscount && <s className="old-price">{fmt(item.price)} DA</s>}
                        </div>
                    </div>

                    <div className="label-row">
                        <label>Taille</label>
                        <button type="button" className="link-btn" onClick={() => setShowGuide(true)}>
                            Guide des tailles
                        </button>
                    </div>
                    <div className="taille">
                        {TAILLES.map(size => (
                            <button
                                type="button"
                                key={size}
                                className={`t-square ${selectedSize === size ? "checked" : ""}`}
                                onClick={() => toggleSize(size)}
                                aria-pressed={selectedSize === size}
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                    <div className="label-row">
                        <label>Couleurs</label>
                        {selectedColor && <span className="color-name">{selectedColor.name}</span>}
                    </div>
                    <div className="couleurs">
                        {COULEURS.map(color => (
                            <ColorOption
                                key={color.hex}
                                color={color}
                                checked={selectedColor?.hex === color.hex}
                                onToggle={toggleColor}
                            />
                        ))}
                    </div>

                    {/* Livraison */}
                    <div className="delivery">
                        <label htmlFor="wilaya-select">Livraison</label>
                        <select
                            id="wilaya-select"
                            className="wilaya-select"
                            value={wilayaCode}
                            onChange={(e) => { setWilayaCode(e.target.value); setError(""); }}
                        >
                            <option value="">Choisissez votre wilaya</option>
                            {WILAYAS.map(w => (
                                <option key={w.code} value={w.code}>
                                    {String(w.code).padStart(2, "0")} - {w.name}
                                </option>
                            ))}
                        </select>

                        <div className="delivery-type" role="radiogroup" aria-label="Mode de livraison">
                            {[
                                { key: "domicile", label: "À domicile", price: homePrice },
                                { key: "bureau", label: "Au bureau", price: deskPrice },
                            ].map(opt => (
                                <button
                                    type="button"
                                    key={opt.key}
                                    role="radio"
                                    aria-checked={deliveryType === opt.key}
                                    className={`delivery-option ${deliveryType === opt.key ? "active" : ""}`}
                                    onClick={() => setDeliveryType(opt.key)}
                                >
                                    <span className="delivery-option-label">{opt.label}</span>
                                    <span className="delivery-option-price">
                                        {opt.price !== null ? `${fmt(opt.price)} DA` : "—"}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <ul className="delivery-info">
                            <li>Livraison dans les 58 wilayas</li>
                            <li>Paiement à la livraison</li>
                            <li>Délai estimé : 24h à 72h</li>
                        </ul>

                        <div className="summary">
                            <div className="summary-row">
                                <span>Produit</span>
                                <span>{fmt(finalPrice)} DA</span>
                            </div>
                            <div className="summary-row">
                                <span>Livraison ({deliveryType === "domicile" ? "domicile" : "bureau"})</span>
                                <span>{deliveryPrice !== null ? `${fmt(deliveryPrice)} DA` : "Choisissez une wilaya"}</span>
                            </div>
                            <div className="summary-row total">
                                <span>Total</span>
                                <span>{total !== null ? `${fmt(total)} DA` : `${fmt(finalPrice)} DA`}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {error && <p className="order-error" role="alert">{error}</p>}

                <div className="item-btns">
                    <button type="button" className="ajouter" aria-label="Ajouter au panier">
                        <Cart2 />
                    </button>
                    <button type="button" className="commander" onClick={handleCommander}>
                        Commander
                    </button>
                </div>
            </div>

            {showGuide && <SizeGuide onClose={() => setShowGuide(false)} />}
        </div>
    )
}