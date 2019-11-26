export function createElement(
  type: string,
  props?: object | null,
  ...children: object[]
) {
  return {
    type,
    props: {
      ...props,
      children
    }
  };
}
