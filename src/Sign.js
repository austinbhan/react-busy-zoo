export default function Sign(props) {
  return (
    <div>{
      props.isOpen
        ? 'IT IS OPEN'
        :
        'SORRY THE ZOO IS CLOSED'
    }
    <div>
      { props.isOpen && 'this shows only is props.isOpen is falsey'}
      { props.isOpen || 'this shows only is props.isOpen is truthy'}
    </div>
    </div>
  );
}