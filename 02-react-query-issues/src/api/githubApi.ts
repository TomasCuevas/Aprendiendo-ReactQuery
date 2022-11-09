import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
