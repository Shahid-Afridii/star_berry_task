import { useEffect, useState } from "react";
import { fetchProperties } from "../api/propertyService";
import PropertyCard from "../components/PropertyCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties().then(setProperties);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Property Listings</h2>
      <div className="row">
        {properties.map((property) => (
          <div className="col-md-4" key={property.id}>
            <Link to={`/property/${property.id}`} className="text-decoration-none">
              <PropertyCard property={property} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
