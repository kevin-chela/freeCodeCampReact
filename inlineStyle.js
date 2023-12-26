class Colorful extends React.Component {
    render() {
      return (
        <div 
        style={{
           color: "red",
           fontSize: 72,
        }}
        >
        Big Red
        </div>
      );
    }
  };

  //sample 2

  const styles = {
    color: 'purple',
    fontSize: 40,
    border: "2px solid purple",
  };
  
  class Colorful extends React.Component {
    render() {
      // change code below this line
      return (
        <div style={styles}>Style Me!</div>
      );
      // change code above this line
    }
  };