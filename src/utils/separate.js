const join = (base, max) => {
  var result = [[]];
  var group = 0;

  for (var index = 0; index < base.length; index++) {
    if (result[group] === undefined) {
      result[group] = [];
    }

    result[group].push(base[index]);

    if ((index + 1) % max === 0) {
      group = group + 1;
    }
  }

  return result;
}

export default join;