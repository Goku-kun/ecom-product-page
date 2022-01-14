// eslint-disable-next-line no-unused-vars
const items = [
  { name: "bob", category: "person" },
  { name: "fred", category: "person" },
  { name: "jack", category: "rabbit" },
];
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);
