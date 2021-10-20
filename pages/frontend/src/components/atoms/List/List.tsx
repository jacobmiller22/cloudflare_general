interface IListProps {
  items: any[];
  Component: any;
}

const List = ({ items, Component }: IListProps): any => {
  //@ts-ignore
  return items.map((item) => <Component {...item} />);
};

export default List;
