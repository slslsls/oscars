function invalidPicksObject(obj) {
  if (!Object.keys(obj).includes('username')) return true;
  if (!Object.keys(obj).includes('picks')) return true;
  if (!Array.isArray(obj.picks)) return true;
  if (obj.picks.length != 11) return true;
  obj.picks.forEach(p => {
    if (!Object.keys(p).includes('categoryId')) return true;
    if (!Object.keys(p).includes('nomineeId')) return true;
  });
  return false;
}

module.exports = {
  invalidPicksObject
};
