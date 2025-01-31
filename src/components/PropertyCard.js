import { AiOutlineHeart } from "react-icons/ai";

// A mapping of currency codes to symbols
const currencySymbols = {
  GBP: "£",
  USD: "$",
  EUR: "€",
  // Add more currency mappings as needed
};

const PropertyCard = ({ property }) => {
  const { attributes } = property;

  // Ensure critical attributes exist; skip the card if any is missing
  if (
    !attributes?.images ||
    attributes.images.length === 0 || // No image available
    !attributes?.title || // Missing title
    !attributes?.description || // Missing description
    !attributes?.price // Missing price
  ) {
    return null;
  }

  const imageUrl = attributes.images[0].srcUrl; 

  return (
    <div
      className="card mb-4"
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        height: "100%",
      }}
    >
      {/* Wishlist Icon */}
      <div
        className="position-absolute"
        style={{
          top: "10px",
          right: "10px",
          zIndex: 10,
        }}
      >
        <button
          className="btn p-2"
          style={{
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
          }}
        >
          <AiOutlineHeart size={20} color="#FF4D4D" />
        </button>
      </div>

      {/* Property Image */}
      <img
        src={imageUrl}
        className="card-img-top"
        alt="Property"
        style={{
          height: "200px",
          objectFit: "cover",
          borderBottom: "1px solid #ddd",
        }}
      />

      {/* Property Details */}
      <div className="card-body d-flex flex-column">
        <h5
          className="card-title text-truncate"
          style={{
            fontWeight: "bold",
            fontSize: "1rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {attributes.title}
        </h5>
        <p
          className="card-text text-muted mb-3"
          style={{
            fontSize: "0.9rem",
            lineHeight: "1.4",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {attributes.description}
        </p>
        <h6
          style={{
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#333",
          }}
        >
          {currencySymbols[attributes.currency] || attributes.currency}
          {attributes.price?.toLocaleString()}
        </h6>
       
      </div>
    </div>
  );
};

export default PropertyCard;
