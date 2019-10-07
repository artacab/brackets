module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let item = 0; item < str.length; item++) {
      const char = str[item];
      for (let index = 0; index < bracketsConfig.length; index++) {
          const template = bracketsConfig[index];
          if (template.includes(char)) {
              const lastElem = stack[stack.length - 1];
              if (lastElem === template[0] && char === template[1]) {
                stack.pop();
              } else {
                  stack.push(char);
              }
          }
      }
  }
  return stack.length > 0 ? false : true;
};