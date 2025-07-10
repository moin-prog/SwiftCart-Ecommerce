export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
     { id: "laptop & tablet", label: "Laptop & Tablet" },
      { id: "mobile", label: "Mobile" },
      { id: "headphones", label: "Headphones" },
      { id: "speaker", label: "Speaker" },
      { id: "power bank & charger", label: "Power Bank & Charger" },
      { id: "gaming accessories", label: "Gaming Accessories" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
        { id: "logitech", label: "Logitech" },
        { id: "redragon", label: "Redragon" },
        { id: "hp", label: "HP" },
        { id: "razer", label: "Razer" },
        { id: "corsair", label: "Corsair" },
        { id: "redmi", label: "Redmi" },
        { id: "anker", label: "Anker" },
         { id: "samsung", label: "Samsung" },
        { id: "bose", label: "Bose" },
        { id: "jbl", label: "JBL" },
        { id: "sony", label: "Sony" },
         { id: "sennheiser", label: "Sennheiser" },
        { id: "apple", label: "Apple" },
        { id: "acer", label: "Acer" },
        { id: "oneplus", label: "OnePlus" },
        { id: "xiaomi", label: "Xiaomi" },
        { id: "realme", label: "Realme" },
         { id: "google", label: "Google" },
        { id: "dell", label: "Dell" },
       { id: "lenovo", label: "Lenovo" },
         { id: "microsoft", label: "Microsoft" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
 {
    id: "laptop & tablet",
    label: "Laptop & Tablet",
    path: "/shop/listing",
  },
  {
    id: "mobile",
    label: "Mobile",
    path: "/shop/listing",
  },
  {
    id: "headphones",
    label: "Headphones",
    path: "/shop/listing",
  },
  {
    id: "speaker",
    label: "Speaker",
    path: "/shop/listing",
  },
  {
    id: "power bank & charger",
    label: "Power Bank & Charger",
    path: "/shop/listing",
  },
 {
    id: "gaming accessories",
    label: "Gaming Accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  "laptop & tablet": "Laptop & Tablet",
  mobile: "Mobile",
  headphones: "Headphones",
  speaker: "Speaker",
  "power bank & charger": "Power Bank & Charger",
  "gaming accessories": "Gaming Accessories",
};

export const brandOptionsMap = {
   logitech: "Logitech",
    redragon: "Redragon",
    hp: "HP",
    razer: "Razer",
    corsair: "Corsair",
    redmi: "Redmi",
    anker: "Anker",
    samsung: "Samsung",
    bose: "Bose",
    jbl: "JBL",
    sony: "Sony",
    sennheiser: "Sennheiser",
    apple: "Apple",
    acer: "Acer",
    oneplus: "OnePlus",
    xiaomi: "Xiaomi",
    realme: "Realme",
    google: "Google",
    dell: "Dell",
    lenovo: "Lenovo",
    microsoft: "Microsoft",
};

export const filterOptions = {
  category: [
    { id: "laptop & tablet", label: "Laptop & Tablet" },
      { id: "mobile", label: "Mobile" },
      { id: "headphones", label: "Headphones" },
      { id: "speaker", label: "Speaker" },
      { id: "power bank & charger", label: "Power Bank & Charger" },
      { id: "gaming accessories", label: "Gaming Accessories" },
  ],
  brand: [
        { id: "logitech", label: "Logitech" },
        { id: "redragon", label: "Redragon" },
        { id: "hp", label: "HP" },
        { id: "razer", label: "Razer" },
        { id: "corsair", label: "Corsair" },
        { id: "redmi", label: "Redmi" },
        { id: "anker", label: "Anker" },
         { id: "samsung", label: "Samsung" },
        { id: "bose", label: "Bose" },
        { id: "jbl", label: "JBL" },
        { id: "sony", label: "Sony" },
         { id: "sennheiser", label: "Sennheiser" },
        { id: "apple", label: "Apple" },
        { id: "acer", label: "Acer" },
        { id: "oneplus", label: "OnePlus" },
        { id: "xiaomi", label: "Xiaomi" },
        { id: "realme", label: "Realme" },
         { id: "google", label: "Google" },
        { id: "dell", label: "Dell" },
       { id: "lenovo", label: "Lenovo" },
         { id: "microsoft", label: "Microsoft" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];