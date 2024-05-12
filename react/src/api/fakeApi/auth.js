const USERS_KEY_NAME = 'users-db';
const AUTH_STATUS_KEY_NAME = 'auth-status';

const saveUser = (user) => {
  const users = getUsers();
  const usercCount = Object.keys(users).length;

  const newUserId = usercCount + 1;
  const newUser = { ...user, id: newUserId };
  const newUsers = {
    ...users,
    [newUserId]: newUser,
  }

  localStorage.setItem(USERS_KEY_NAME, JSON.stringify(newUsers));
}

const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY_NAME);
  return users ? JSON.parse(users) : {};
}

const getUser = ({ email, password }) => {
  const users = getUsers();
  const user = Object.values(users).find(user => user.email === email && user.password === password);
  return user || null;
}

const getUserById = (id) => {
  const users = getUsers();

  return users[id] || null;
}

const checkUser = ({ email, password }) => {
  const users = getUsers();
  const user = Object.values(users).find(user => user.email === email);

  return user || null;
}

const saveAuthStatus = (status) => {
  localStorage.setItem(AUTH_STATUS_KEY_NAME, status);
}

const getAuthStatus = () => {
  const status = localStorage.getItem(AUTH_STATUS_KEY_NAME);
  return status || false;
}

export const registration = ({ name, email, password }) => {
  if (checkUser({ email, password })) {
    return {
      status: 'error',
      message: 'Пользователь уже существует',
    };
  }
  saveUser({ name, email, password });
  return {
    status: 'success',
    message: 'Registration successful',
  };
}

export const login = ({ email, password }) => {
  const user = getUser({ email, password });
  if (!user) {
    return {
      status: 'error',
      message: 'Неверный логин или пароль',
    };
  }

  saveAuthStatus(true);
  return {
    status: 'success',
    message: 'Login successful',
    data: user,
  };
}

export const checkAuth = () => {
  const status = getAuthStatus();
  return status;
}
