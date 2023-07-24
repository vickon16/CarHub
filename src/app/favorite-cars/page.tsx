import Container from "@/components/Container";
import FavoriteSection from "@/components/cars-section/FavoriteSection";
import React from "react";

const FavoriteCarsPage = () => {
  return (
    <main className="mb-4 mt-28 md:mt-44">
      <Container>
        <FavoriteSection />
      </Container>
    </main>
  );
};

export default FavoriteCarsPage;
