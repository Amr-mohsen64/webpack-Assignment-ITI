const elementGenrator  = (elm ,html) => {
    const el = document.createElement(elm);
    el.innerHTML  = html;
    document.body.appendChild(el)
}


export default elementGenrator;