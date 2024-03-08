import Star from '../assets/star.png';
import PropTypes from 'prop-types';

function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.item.location === ' • Online') {
        badgeText = 'ONLINE';
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img
                src={`../../public/images/${props.item.coverImg}`}
                className="card--image"
                alt="Card Image"
            />
            <div className="card--stats">
                <img src={Star} className="card--star" alt="Star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount})</span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--text">{props.item.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.item.price}</span> /person
            </p>
        </div>
    );
}

Card.propTypes = {
    item: PropTypes.shape({
        coverImg: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            rating: PropTypes.number.isRequired,
            reviewCount: PropTypes.number.isRequired,
        }),
        location: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        openSpots: PropTypes.number.isRequired,
    }).isRequired,
};

export default Card;
