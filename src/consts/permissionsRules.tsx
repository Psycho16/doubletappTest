import { UserRole } from "@models/common/user.model"


export type RulesType = {
  [key in UserRole]: {
    static: string[];
    //dynamic?: Record<string, (data: unknown) => unknown>;
  };
};

const rules: RulesType = {
  ADMIN: {
    static: []
    // dynamic: {
    //   "category:action": (data): boolean => {
    //     if (!data.test || !data.test2) return false
    //     return data.test === data.test2
    //   }
    // }
  },
  VISITOR: {
    static: [
      "about-page:visit",
      "programm-page:visit",
      "club-page:visit",
      "faq-page:visit",
      "sign:sign-up",
      "header:read"
    ]
  },
  ARTIST: {
    static: []
  },
  EXPERT: {
    static: []
  }
}

export default rules