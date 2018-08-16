function makeOwner(userData) {
  return {
    id: userData.id,
    name: userData.name
  }
}

function makeSubscribers(subscribers) {
  return subscribers.map(subscriber => {
    const subsciberData = {
      id: subscriber.id,
      name: subscriber.name
    }

    return subsciberData;
  });
};

module.exports = {
  makeOwner,
  makeSubscribers
};