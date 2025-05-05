import { useEffect, useState } from "react";
import { getAllRestaurants, deleteRestaurant } from "../api/restaurantApi";
import RestaurantList from "../components/RestaurantList";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface Restaurant {
  id: number;
  name: string;
  address: string;
  contact: string;
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const fetchRestaurants = async () => {
    try {
      const { restaurants } = await getAllRestaurants();
      setRestaurants(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurants", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const { message } = await deleteRestaurant(id);
      setRestaurants((prev) => prev.filter((r) => r.id !== id));
      return { success: true, message };
    } catch (error) {
      return { success: false, message: "Failed to delete restaurant." };
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-row justify-between shadow-md items-center lg:px-32 px-5 bg-[url('./assets/bg-pic.jpg')] bg-cover">
        <div className="w-full lg:w-2/3 space-y-5">
          <h1 className="text-amber-50 font-semibold text-6xl drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]">
            {" "}
            Discover & List the Best Restaurants with Platéa
          </h1>
          <p className="text-emerald-50 text-xl drop-shadow-[2px_2px_4px_rgba(0,0,0,0.2)]">
            Platéa connects food lovers with top-rated restaurants in their
            area. Whether you're searching for a cozy café or listing your own
            dining spot, Platea makes it easy to explore, share, and support
            local culinary experiences.
          </p>
        </div>
      </div>

      <RestaurantList restaurants={restaurants} onDelete={handleDelete} />
      <Footer />
    </>
  );
};

export default Home;
