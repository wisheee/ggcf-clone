const getTarget = (elem, className) => {
  while (!elem.classList.contains(className)) {
    elem = elem.parentNode;

    if (elem.nodeName == 'BODY') {
      elem = null;
      return;
    }
  }

  return elem;
}

export {
  getTarget
};