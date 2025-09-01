// src/pages/Home/Home.jsx
import React, { useEffect, useState } from "react";

function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFoods() {
      try {
        const res = await fetch(
          "https://fahim5120.github.io/food-ordering-api/react.json"
        );
        const data = await res.json();
        console.log("fetched data:", data);

        // Normalize to an array whatever the shape is:
        let list = [];
        if (Array.isArray(data)) {
          list = data;
        } else if (data && Array.isArray(data.default)) {
          list = data.default;
        } else if (data && Array.isArray(data.foods)) {
          list = data.foods;
        } else if (data && typeof data === "object") {
          // try to find the first array value inside the object
          const firstArray = Object.values(data).find((v) =>
            Array.isArray(v)
          );
          list = firstArray || [];
        } else {
          list = [];
        }

        setFoods(list);
      } catch (err) {
        console.error("Error fetching/parsing foods:", err);
        setFoods([]);
      } finally {
        setLoading(false);
      }
    }

    loadFoods();
  }, []);

  // safe guards before calling .slice/.map
  const popular = Array.isArray(foods) ? foods.slice(0, 8) : [];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-yellow-400 to-red-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Delicious Food, Delivered Fast 
        </h1>
        <p className="text-lg md:text-xl mb-6">Fresh, Hot & Tasty meals!</p>
      </section>

      {/* Popular */}
     
      {/* Footer */}
     
    </div>
  );
}

export default Home;
