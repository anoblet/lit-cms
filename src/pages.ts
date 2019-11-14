import Firebase from "./Firebase";

export const getPage = async (page: string) => {
  const result = await Firebase.getCollection("pages", {
    where: {
      property: "url",
      operator: "==",
      value: page
    }
  });
};
