import AppRouter from "./Router/AppRouter";
import Modal from "./UI/Modal/Modal";
import Navbar from "./UI/Navbar/Navbar";

function App() {
  // useEffect(() => {
  //   const userDB = JSON.parse(
  //     !Boolean(localStorage.getItem("users"))
  //       ? '[]'
  //       : localStorage.getItem("users")
  //   );

  //   const prevUserDB = JSON.parse(
  //     !Boolean(localStorage.getItem("nextUser"))
  //       ? localStorage.getItem("nextUser")
  //       : '[]'
  //   );
  //   localStorage.setItem(
  //     "nextUser",
  //     JSON.stringify([...prevUserDB, ...userDB])
  //   );
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <Modal />
    </div>
  );
}

export default App;
