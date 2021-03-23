import React, { useRef, useState } from 'react';
import UserList from 'components/UserList';
import CreateUser from 'components/CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Jinyoung',
      email: 'jy@gmail.com',
    },
    {
      id: 2,
      username: 'Jinjoo',
      email: 'jj@gmail.com',
    },
    {
      id: 3,
      username: 'Jinee',
      email: 'jn@gmail.com',
    },
  ]);

  // nextId에 저장된 4라는 값을 기억하고 싶을때 useRef를 사용할 수 있다.
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    // 기존 배열을 복사하고, 새로운 항목을 뒤에 추가한다.
    setUsers([...users, user]);
    // 같은 문법
    // setUsers(users.concat(user))

    setInputs({
      username: '',
      email: '',
    });
    console.log(nextId.current); // 4
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
