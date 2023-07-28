const cipher = {
  encode: function (offset, text) {
    let result = '';
    if ((Number.isInteger(offset)&& offset > 0) || typeof text === "string") {

      for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(
          /[A-Z]/)) {
          char = String.fromCharCode((text.charCodeAt(i) - 65 + offset) % 26 + 65);
        }
        result += char;
      }
      return result;
    }
    else { throw new TypeError("error");

    }
  },
  decode: function(offset, text) {
    if((Number.isInteger(offset)&& offset > 0) || typeof text === "string"){
      let result = '';
      for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[A-Z]/)) {
          char = String.fromCharCode((text.charCodeAt(i) - 65 - offset % 26 + 26 + 26) % 26 + 65);
        }
        result += char;
      }
      return result;
    }
    else { throw new TypeError("otro error");

    }
  },
};

export default cipher;

