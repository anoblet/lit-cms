import { getCollection } from "@anoblet/firebase";

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
