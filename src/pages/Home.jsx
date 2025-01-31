import { useEffect, useState } from "react";
import { fetchProperties } from "../api/propertyService";
import PropertyCard from "../components/PropertyCard";
import { Link } from "react-router-dom";

const SkeletonLoader = () => {
  return (
    <div className="col-md-4 py-2">
      <div
        className="card"
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "200px",
            backgroundColor: "#e0e0e0",
            animation: "pulse 1.5s infinite",
          }}
        ></div>
        <div className="card-body">
          <div
            style={{
              height: "1.5rem",
              width: "60%",
              backgroundColor: "#e0e0e0",
              marginBottom: "8px",
              animation: "pulse 1.5s infinite",
            }}
          ></div>
          <div
            style={{
              height: "1rem",
              width: "90%",
              backgroundColor: "#e0e0e0",
              marginBottom: "8px",
              animation: "pulse 1.5s infinite",
            }}
          ></div>
          <div
            style={{
              height: "1.5rem",
              width: "40%",
              backgroundColor: "#e0e0e0",
              animation: "pulse 1.5s infinite",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    bedrooms: "",
    neighborhood: "",
    minPrice: "",
    maxPrice: "",
    sortBy: "",
  });
  const [loading, setLoading] = useState(true);

  // Fetch properties from API on component mount
  useEffect(() => {
    fetchProperties().then((data) => {
      setProperties(data);
      setFilteredProperties(data);
      setLoading(false); // Stop loading once data is fetched
    });
  }, []);

  // Filter properties whenever filters or properties change
  useEffect(() => {
    let filtered = [...properties]; // Create a shallow copy of properties

    // Filter by bedrooms
    if (filters.bedrooms) {
      filtered = filtered.filter(
        (property) =>
          property.attributes.bedroom &&
          property.attributes.bedroom.toString() === filters.bedrooms
      );
    }

    // Filter by neighborhood
    if (filters.neighborhood) {
      filtered = filtered.filter(
        (property) =>
          property.attributes.display_address &&
          property.attributes.display_address
            .toLowerCase()
            .includes(filters.neighborhood.toLowerCase())
      );
    }

    // Filter by price range
    if (filters.minPrice) {
      filtered = filtered.filter(
        (property) => property.attributes.price >= parseInt(filters.minPrice)
      );
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(
        (property) => property.attributes.price <= parseInt(filters.maxPrice)
      );
    }

    // Sort properties
    if (filters.sortBy === "priceLowToHigh") {
      filtered = filtered.slice().sort(
        (a, b) => a.attributes.price - b.attributes.price
      );
    } else if (filters.sortBy === "priceHighToLow") {
      filtered = filtered.slice().sort(
        (a, b) => b.attributes.price - a.attributes.price
      );
    }

    setFilteredProperties(filtered);
  }, [filters, properties]);

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Clear filters
  const clearFilters = () => {
    setFilters({
      bedrooms: "",
      neighborhood: "",
      minPrice: "",
      maxPrice: "",
      sortBy: "",
    });
  };

  return (
    <div className="container mt-5">
      <h2 style={{ textAlign: "center" }}>Property For Sales</h2>

      {/* Filter Section */}
      <div className="row mb-4 py-3">
        <div className="col-lg-2 col-md-4 col-sm-6 mb-2">
          <select
            name="bedrooms"
            className="form-select"
            value={filters.bedrooms}
            onChange={handleFilterChange}
          >
            <option value="">All Bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
          </select>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-2">
          <input
            type="text"
            name="neighborhood"
            className="form-control"
            placeholder="Neighborhood"
            value={filters.neighborhood}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-2">
          <input
            type="number"
            name="minPrice"
            className="form-control"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-2">
          <input
            type="number"
            name="maxPrice"
            className="form-control"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-2">
          <select
            name="sortBy"
            className="form-select"
            value={filters.sortBy}
            onChange={handleFilterChange}
          >
            <option value="">Sort by</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-2">
          <button
            className="btn btn-outline-secondary w-100"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Property Cards */}
      <div className="row">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))
          : filteredProperties.map((property) => (
              <div className="col-md-4 py-2" key={property.id}>
                <Link
                  to={`/property/${property.id}`}
                  className="text-decoration-none"
                >
                  <PropertyCard property={property} />
                </Link>
              </div>
            ))}
        {!loading && filteredProperties.length === 0 && (
          <p className="text-center">No properties match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
