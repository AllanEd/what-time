export default [
  {
    path: 'owner',
    select: 'name',
  }, {
    path: 'subscribers',
    select: 'name',
  }, {
    path: 'weeks',
    select: ['startDate', 'subscribers'],
  },
];
