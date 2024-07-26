import { UsersProvider } from "./context/usersContext";

import UserList from "./components/UserList/UserList";

export default function App() {
  return (
    <main>
      <UsersProvider>
        <UserList />
      </UsersProvider>
    </main>
  );
}
