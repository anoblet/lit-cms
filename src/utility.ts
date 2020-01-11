import { getCollection } from "@anoblet/firebase";

export const createComponent = (tagName: string, properties = {}) => {
  const element = document.createElement(tagName);
  Object.keys(properties).map((key) => (element[key] = properties[key]));
  return element;
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
