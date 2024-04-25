import React from "react";

export const Map = () => {
  return (
    <div>
      <div className="relative w-full h-96">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13986.139893671474!2d84.05519690879152!3d28.159940514387745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjhcMjMuMTU5OTQwNTE0Mzg3NDUlNzcuMDU1MTk2OTA4NzkxNTI!5e0!3m2!1sen!2sus!4v1648531095957!5m2!1sen!2sus&markers=color:red%7C28.159940514387745,84.05519690879152"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"></iframe>
      </div>
    </div>
  );
};
