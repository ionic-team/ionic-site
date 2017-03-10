module.exports = {

  // Services
  PORT: int(process.env.PORT) || 3000,
  PROD: bool(process.env.PROD) || false,
};

function bool(str) {
  if (str == void 0) {
    return false;
  }
  return str.toLowerCase() === 'true';
}

function int(str) {
  if (!str) {
    return 0;
  }
  return parseInt(str, 10);
}

function float(str) {
  if (!str) {
    return 0;
  }
  return parseFloat(str, 10);
}