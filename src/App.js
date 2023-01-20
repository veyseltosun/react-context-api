import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";



function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <AuthContextProvider>

          <ThemeContextProvider>

            <Navbar />
            <TodoList />
          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
