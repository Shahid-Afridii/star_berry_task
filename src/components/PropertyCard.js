const PropertyCard = ({ property }) => {
    console.log("property data", property);
  
    // Ensure images exist and use the first image's srcUrl, fallback to placeholder if no images are available
    const imageUrl =
      property.attributes.images && property.attributes.images.length > 0
        ? property.attributes.images[0].srcUrl // Use `srcUrl` for the first image
        : "https://via.placeholder.com/150"; // Placeholder if no images are found
  
    return (
      <div className="card mb-3">
        <img src={imageUrl} className="card-img-top" alt="Property" />
        <div className="card-body">
          <h5 className="card-title">{property.attributes.title}</h5>
          <p className="card-text">{property.attributes.description}</p>
        </div>
      </div>
    );
  };
  
  export default PropertyCard;
  