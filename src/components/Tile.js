function Tile({ value, onClick}) {
    const [color, setColor] = useState('white');
    function changeColor() {
        setColor('red');
    }

  return (
        <button className="square" style={{background:color}} onClick={() => {onClick(); changeColor()}}>
      {value}
    </button>
  );
}

export default Tile;