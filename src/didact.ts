function createElement(
  type: string,
  props?: object | null,
  ...children: any[]
) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object" ? child : createTextElement(child)
      )
    }
  };
}

function createTextElement(text: string | number) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
}

const Didact = {
  createElement
};
export default Didact;
