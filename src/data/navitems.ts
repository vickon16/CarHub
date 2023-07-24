export type NavItems = {
  id: string;
  name: string;
  path : string;
};

export const navItems: NavItems[] = [
  {
    id: "1",
    name: "Rental Deals",
    path : "/",
  },
  {
    id: "2",
    name: "Favorite Cars",
    path : "/favorite-cars"
  },
  {
    id: "3",
    name: "Login",
    path : "/login"
  }
];
