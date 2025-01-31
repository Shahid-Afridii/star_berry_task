import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineShareAlt, AiOutlineHeart,AiOutlineHome } from "react-icons/ai";
import { fetchProperties } from "../api/propertyService"; 


const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const loadProperty = async () => {
      const properties = await fetchProperties(); // Fetch all properties
      const selectedProperty = properties.find((p) => p.id.toString() === id); // Find the property by id
      setProperty(selectedProperty);

      if (selectedProperty?.attributes?.images?.length > 0) {
        setMainImage(selectedProperty.attributes.images[0].srcUrl);
      }
    };

    loadProperty();
  }, [id]);

  // Shimmer Effect Component
  const Shimmer = () => (
    <div className="container-fluid">
    <div className={`row ${isMobile ? "" : "vh-100"}`}>
      {/* Left Section Shimmer */}
      <div
        className={`col-lg-6 col-md-6 d-flex flex-column p-3 border-end ${
          isMobile ? "" : "h-100"
        }`}
        style={{ position: isMobile ? "relative" : "sticky", top: 0 }}
      >
        {/* Main Image Shimmer */}
        <div
          className="shimmer-box mb-3"
          style={{
            width: "100%",
            height: isMobile ? "200px" : "500px", // Adjust height based on screen size
            borderRadius: "8px",
          }}
        ></div>

        {/* Thumbnail Shimmers */}
        <div className="d-flex flex-row gap-2 overflow-auto">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="shimmer-box"
              style={{
                width: isMobile ? "80px" : "100px", // Adjust size for mobile
                height: isMobile ? "80px" : "100px",
                borderRadius: "8px",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Section Shimmer */}
      <div className="col-lg-6 col-md-6 d-flex flex-column p-3 overflow-auto">
        {/* Price Shimmer */}
        <div
          className="shimmer-box mb-4"
          style={{
            width: "50%",
            height: "24px",
            borderRadius: "4px",
          }}
        ></div>

        {/* Subtitle Shimmer */}
        <div
          className="shimmer-box mb-3"
          style={{
            width: "30%",
            height: "20px",
            borderRadius: "4px",
          }}
        ></div>

        {/* Button Shimmer */}
        <div
          className="shimmer-box mb-4"
          style={{
            width: "100%",
            height: "40px",
            borderRadius: "8px",
          }}
        ></div>

        {/* Paragraph/Content Block Shimmers */}
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="shimmer-box mb-3"
            style={{
              width: "100%",
              height: "20px",
              borderRadius: "4px",
            }}
          ></div>
        ))}

        {/* Large Content Block Shimmer */}
        <div
          className="shimmer-box mb-4"
          style={{
            width: "100%",
            height: isMobile ? "200px" : "300px", // Adjust size based on screen size
            borderRadius: "8px",
          }}
        ></div>
      </div>
    </div>
  </div>
  );

  if (!property) {
    return <Shimmer />;
  }
  const { attributes } = property;
  const {
    title,
    price,
    currency,
    images,
    description,
    long_description,
    display_address,
    bedroom,
    bathroom,
    crm_negotiator_id,
    latitude,
    longitude,
  } = attributes;

  return (
    <div className="container-fluid">
      <div className={`row ${isMobile ? "" : "vh-100"}`}>
        {/* Left Section */}
        <div
          className={`col-lg-6 col-md-6 d-flex flex-column p-3 border-end ${
            isMobile ? "" : "h-100"
          }`}
          style={{ position: isMobile ? "relative" : "sticky", top: 0 }}
        >
          {mainImage ? (
            <div
              className="position-relative overflow-hidden mb-2"
              style={{ borderRadius: "8px", cursor: "zoom-in" }}
            >
              <img
                src={mainImage}
                alt={title}
                className="img-fluid"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          ) : (
            <p>No main image available</p>
          )}

          {images && images.length > 1 && (
            <div
              className="d-flex flex-row overflow-auto"
              style={{
                whiteSpace: "nowrap",
                gap: "8px",
                marginBottom: "1rem",
              }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.srcUrl}
                  alt={`Thumbnail ${index + 1}`}
                  className="img-thumbnail"
                  style={{
                    width: isMobile ? "100px" : "140px",
                    height: isMobile ? "100px" : "140px",
                    objectFit: "cover",
                    cursor: "pointer",
                    border:
                      mainImage === image.srcUrl
                        ? "2px solid #007bff"
                        : "1px solid #ddd",
                  }}
                  onClick={() => setMainImage(image.srcUrl)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Section */}
        <div
          className="col-lg-6 col-md-6 d-flex flex-column p-3 overflow-auto"
          style={{ height: "100%", display: "flex" }}
        >
        <div className={`d-flex justify-content-between align-items-center ${isMobile ? "mb-3" : "mb-4"}`}>
  <h2 className={`fs-${isMobile ? "5" : "4"}`} style={{ marginBottom: "0" }}>
    {price
      ? `${currency === "GBP" ? "£" : currency === "USD" ? "$" : currency}${price.toLocaleString()}`
      : "Price not available"}
  </h2>

  <div className="d-flex gap-2">
    <button
      className={`btn btn-outline-primary btn-${isMobile ? "sm" : "md"}`}
      style={{
        padding: isMobile ? "0.3rem 0.6rem" : "0.5rem 1rem",
      }}
    >
      <AiOutlineShareAlt /> Share
    </button>
    <button
      className={`btn btn-outline-danger btn-${isMobile ? "sm" : "md"}`}
      style={{
        padding: isMobile ? "0.3rem 0.6rem" : "0.5rem 1rem",
      }}
    >
      <AiOutlineHeart /> Wishlist
    </button>
  </div>
</div>

{/* Bedroom and Bathroom Info */}
<p className={`text-muted mb-${isMobile ? "2" : "3"} fs-${isMobile ? "6" : "5"}`}>
  {bedroom} bed | {bathroom} bath
</p>

{/* Address */}
<p className={`mb-${isMobile ? "3" : "4"} fs-${isMobile ? "6" : "5"}`}>
  <strong>Address:</strong> {display_address}
</p>
<p className={`mb-${isMobile ? "3" : "4"} fs-${isMobile ? "6" : "5"}`}>
 {/* Contact Us Block */}

  <a
    href="/"
    className="text-decoration-none d-flex align-items-center"
    style={{
      fontSize: isMobile ? "0.875rem" : "1.25rem", // Smaller font size for mobile
      fontWeight: "bold",
      color: "#FFA500", // Custom orange color
    }}
  >
    <AiOutlineHome className="me-2" style={{ fontSize: isMobile ? "1rem" : "1.25rem" }} />
    Please Contact us
  </a>

</p>



{/* Contact Button */}
<div>
  <button
    className={`btn btn-dark w-100 mb-${isMobile ? "3" : "4"} fs-${isMobile ? "6" : "5"}`}
    style={{
      padding: isMobile ? "0.5rem" : "0.75rem 1rem",
    }}
  >
    Contact Agent
  </button>
</div>

          
          {/* Facts & Features */}
          <div
  className="mb-4"
  style={{
    fontSize: isMobile ? "0.875rem" : "1rem", // Smaller font size for mobile
  }}
>
  <h4
    style={{
      fontSize: isMobile ? "1rem" : "1.25rem", 
    }}
  >
    Facts & Features
  </h4>
  <table className="table">
    <tbody>
      {attributes?.display_address && (
        <tr>
          <td className="fw-bold">Neighbourhood:</td>
          <td>{attributes.display_address}</td>
        </tr>
      )}
      {attributes?.price && attributes?.bedroom && (
        <tr>
          <td className="fw-bold">Price per sqm:</td>
          <td>{`£${(attributes.price / attributes.bedroom).toLocaleString()}`}</td>
        </tr>
      )}
      {attributes?.brochure && (
        <tr>
          <td className="fw-bold">Brochure:</td>
          <td>
            <a href={attributes.brochure} target="_blank" rel="noreferrer">
              Download Brochure
            </a>
          </td>
        </tr>
      )}
      {attributes?.floorplan?.length > 0 && (
        <tr>
          <td className="fw-bold">Floor plan:</td>
          <td>
            <a
              href={attributes.floorplan[0]?.srcUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Floorplan
            </a>
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>



          {/* Description */}
          {description && (
            <div className={`mb-${isMobile ? "3" : "4"}`}>
              <h5>Description</h5>
              <p>{description}</p>
            </div>
          )}

          {/* Long Description */}
          {long_description && (
            <div className={`mb-${isMobile ? "3" : "4"}`}>
              <h5>Additional Information</h5>
              <div dangerouslySetInnerHTML={{ __html: long_description }} />
            </div>
          )}

          {/* Profile Section */}
          {crm_negotiator_id && crm_negotiator_id.name && (
            <div className="mb-4">
              <h5>Agent Details</h5>
              <div className="d-flex align-items-center">
                {crm_negotiator_id.profile_img && (
                  <img
                    src={crm_negotiator_id.profile_img}
                    alt={crm_negotiator_id.name}
                    className="rounded-circle me-3"
                    style={{
                      width: isMobile ? "50px" : "60px",
                      height: isMobile ? "50px" : "60px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <div>
                  <strong>{crm_negotiator_id.name}</strong>
                  {crm_negotiator_id.email ? (
                    <p className="mb-0">
                      <a
                        href={`mailto:${crm_negotiator_id.email}`}
                        className="text-decoration-none"
                      >
                        {crm_negotiator_id.email}
                      </a>
                    </p>
                  ):null}
                </div>
              </div>
            </div>
          )}

          {/* Map Section */}
          {latitude && longitude ? (
            <div className="mb-4">
              <h5>Location</h5>
              <div
                className="rounded"
                style={{
                  height: "200px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Property Location"
                ></iframe>
              </div>
            </div>
          ):null}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
