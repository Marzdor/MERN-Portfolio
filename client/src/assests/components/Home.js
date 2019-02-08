import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header title={""} />
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus
          odio ac sollicitudin tristique. Fusce molestie ipsum non sapien
          iaculis maximus. Pellentesque sem justo, consequat eu viverra in,
          hendrerit in lacus. Sed lacinia augue at suscipit tristique. Mauris
          nec ipsum sit amet tortor semper consectetur. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Donec a quam nec erat
          tristique bibendum sit amet vel nunc. Aliquam porta consectetur nulla
          ut lacinia. Nam eu lorem quis libero posuere facilisis in sed lorem.
          Nulla tristique ullamcorper ultrices. Donec vehicula libero sit amet
          augue dapibus scelerisque. Donec non tincidunt elit. Donec non est sed
          nisl molestie dapibus nec et lorem. Donec mattis, quam nec iaculis
          venenatis, nunc felis auctor neque, vel ullamcorper tellus nisi ac
          sem. Integer luctus ultricies nulla ac viverra.
        </p>
        <Link to="/work">View My Projects</Link>
      </section>
    </div>
  );
};

export default Home;
