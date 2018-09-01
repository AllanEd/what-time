const makeOwner = userData => ({
  id: userData.id,
  name: userData.name,
});

const makeSubscribers = subscribers => subscribers.map((subscriber) => {
  const subsciberData = {
    id: subscriber.id,
    name: subscriber.name,
  };

  return subsciberData;
});

export default {
  makeOwner,
  makeSubscribers,
};
