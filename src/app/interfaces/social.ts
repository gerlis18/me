export interface Social {
  github: SocialRed;
  linkedin: SocialRed;
  twitter: SocialRed;
}

interface SocialRed {
  username?: string;
  link?: string;
  cssClass?: string;
}
