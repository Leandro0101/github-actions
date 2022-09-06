const users = [];
var addUser = (user, callback) => {
  users.push(user);
  callback(user)
};

var printCreatedUser = (user) => {
  console.log('User was created', user.name)
}

addUser({ name: 'leandro lima' }, printCreatedUser)