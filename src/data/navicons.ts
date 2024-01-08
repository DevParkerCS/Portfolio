import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export type TIcon = {
  aLink: string;
  icon: IconDefinition;
};

export const navIcons: TIcon[] = [
  {
    aLink: "https://github.com/DevParkerCS",
    icon: faGithub,
  },
  {
    aLink: "https://www.linkedin.com/in/parker-dev/",
    icon: faLinkedin,
  },
  {
    aLink: "mailto:parkerphillips2003@gmail.com",
    icon: faEnvelope,
  },
];
