import React from "react";
import "./HomePage.css";
import Banner from "./Banner";
import Card from "./Card";

function HomePage() {
  return (
    <div className="homePage">
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Confortable private places, with room for friends or family"
          price="150€/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Confortable private places, with room for friends or family"
          price="150€/night"
        />{" "}
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Confortable private places, with room for friends or family"
          price="150€/night"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Confortable private places, with room for friends or family"
          price="150€/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Confortable private places, with room for friends or family"
          price="150€/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Confortable private places, with room for friends or family"
          price="150€/night"
        />
      </div>
    </div>
  );
}

export default HomePage;
