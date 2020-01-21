import { getCollection } from "@anoblet/firebase";

export const createComponent = (tagName: string, properties = {}) => {
  return Object.assign(document.createElement(tagName), properties);
};

export const getPageBySlug = async (slug: string) => {
  const result = await getCollection("pages", {
    where: {
      property: "slug",
      operator: "==",
      value: slug
    }
  });
  return result[0];
};
