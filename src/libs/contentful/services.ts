import axios from "axios";
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from "../utils";

interface TAllPost {
  sys: { id: string };
  title: string;
  slug: string;
  shortDescription: string;
  timeCreated: string;
  thumbnail: {
    url: string;
  };
}

export async function getAllPost() {
  try {
    const response = await axios.post(
      `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
      {
        query: `
          {
              postCollection {
                items {
                  sys {
                    id
                  }
                  title
                  slug
                  shortDescription
                  thumbnail {
                      url
                  }
                  coverImage {
                      url
                  }
                  timeCreated
                }
              }
          }
        `,
      },
      { headers: { Authorization: "Bearer " + CONTENTFUL_ACCESS_TOKEN } },
    );

    return response.data.data.postCollection.items as TAllPost[];
  } catch (e: any) {
    return "ERROR";
  }
}
