// src/App.jsx

// import Product from "./Product";

// function Product() {
//   return (
//     <div>
//       <h2>Cookies</h2>
// 	  <p>Price: 999 credits</p>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <div>
//       <h1>Products</h1>

//       <Product />
//       {/* <Product />
//       <Product /> */}
//     </div>
//   );
// }

const favBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" }
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return <li>{book.name}</li>;
      })}
    </ul>
  );
};

export default function App () {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favBooks} />
    </>
  );
};