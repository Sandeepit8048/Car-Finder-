import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { carImages } from "../constant/carsImage";



const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cars, setCars] = useState([]);

  const handleSearch = async () => {
    try {
      // Fetch the data from the API with the proxy
      try {
        const response = await fetch('https://freetestapi.com/api/v1/cars');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const filtered = data.filter((car) =>
          car.make.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCars(filtered);
      } catch (error) {
        console.error('Failed to fetch cars:', error);
      }
    } catch (err) {
      console.error("Failed to fetch cars:", err);
    }
  };
  
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setCars([]);
    }
  }, [searchTerm]);
  

  return (
    <>
      < nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex justify-between w-full md:w-auto items-center">
            <div className="text-2xl font-bold text-gray-800">
              <Link to="/">Car-Find</Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600   transition">Home</Link>
            <Link to="/alltasks" className="text-gray-700 hover:text-blue-500 transition">All Tasks</Link>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
          <input
              type="text"
              placeholder="Search cars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 w-full md:w-64"
            />

            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden px-4 pb-3 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-blue-500">Home</Link>
            <Link to="/alltasks" className="block text-gray-700 hover:text-blue-500">All Tasks</Link>
          </div>
        )}
      </nav>

      {/* Car Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cars.map((car) => {
  const randomImage = carImages[Math.floor(Math.random() * carImages.length)];
  return (
    <div key={car.id} className="border shadow-md rounded-xl p-4 bg-white">
      <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
      <p className="text-gray-600">Make: {car.make}</p>
      <p className="text-gray-600">Year: {car.year}</p>
      <p className="text-gray-600">Model: {car.model}</p>
      <img
        src={randomImage}
        alt={car.name}
        className="mt-2 w-full h-40 object-cover rounded-md"
      />
    </div>
  );
})}
      </div>
    </>
  );
};

export default Nav;
