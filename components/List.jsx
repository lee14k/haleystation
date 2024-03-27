const List = ({ list }) => {
    if (!list) {
      // If there's no list prop, don't render anything
      return null;
    }
  
    return (
      <ul className="list-disc list-inside">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
export default List;