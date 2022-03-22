let users = [];

export const getUsers = (req, res) => {
  res.json(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  const id = uuidv4();

  users.push({ ...user, id });

  res.send("User Add success");
};

export const getUserById = (req, res) => {
  const { id } = req.params;

  const user = users.filter((user) => user.id === id);

  res.json(user);
};

export const deleteUserById = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.json(users);
};

export const updateUserById = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;

  res.send(`Usre with id ${id} has been updated!`);
};
