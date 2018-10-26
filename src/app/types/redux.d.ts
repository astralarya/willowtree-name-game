export type AppState = {
  status: "not-ready" | "loading" | "error" | "ready";
  teamMembers: TeamMember[];

  currFaces: TeamMember[];
  currIdx: number;
  currReveal: boolean[];
  featured: false;
};


export type TeamMember = {
  id: string;
  type: "people";
  slug: string;
  jobTitle?: string;
  firstName: string;
  lastName: string;
  headshot: {
    type: "image";
    mimeType?: string;
    id: string;
    url?: string;
    alt: string;
    height?: number;
    width?: number;
  };
  bio?: string;
  socialLinks: {
    type: "linkedin" | "google" | "facebook" | "twitter";
    callToAction: string;
    url: string;
  }[];
};

export type AppAction =
  | { type: "REQUEST_DATA", uri: string }
  | { type: "REQUEST_ERROR" }
  | { type: "RECIEVE_DATA", teamMembers: TeamMember[] }
  | { type: "NEW_ROUND" }
  | { type: "ANSWER_CORRECT" }
  | { type: "ANSWER_INCORRECT", slug: string }
;
