import React from "react";
import AppLink from "./AppLink.jsx";

const appLinksData = [
  {
    id: 1,
    storeName: "App Store",
    iconSrc: "app-store-icon.png",
    linkUrl: "URL_TO_APP_STORE_PAGE",
  },
  {
    id: 2,
    storeName: "Google Play",
    iconSrc: "google-play-store-icon1.png",
    linkUrl: "URL_TO_GOOGLE_PLAY_PAGE",
  },
];

const Getourapp = () => {
  return (
    <section className="getourapp_Section container" id="getourapp">
      <h2>Get our App</h2>
      <p>You can use our App for a better experience on smartphones.</p>

      <div className="app-links">
        {appLinksData.map((link) => (
          <AppLink
            key={link.id}
            storeName={link.storeName}
            iconSrc={link.iconSrc}
            linkUrl={link.linkUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Getourapp;