import Firebase from "./Firebase";

export const getPage = async (page: string) => {
  const result = await Firebase.getCollection("pages", {
    where: {
      property: "slug",
      operator: "==",
      value: page
    }
  });
  return result[0];
};

export const getPageSync = async (page: string, callback) => {
  const result = await Firebase.getCollection("pages", {
    where: {
      property: "slug",
      operator: "==",
      value: page
    }
  });
  return result[0];
};
