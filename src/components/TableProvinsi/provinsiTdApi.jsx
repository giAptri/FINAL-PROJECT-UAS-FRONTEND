export default function Provinsi(props) {
    const { konteens, No } = props;
    const { name, numbers } = konteens;
  
    return (
      <tr>
        <td>{No}</td>
        <td>{name}</td>
        <td>{numbers.confirmed}</td>
        <td>{numbers.recovered}</td>
        <td>{numbers.treatment}</td>
        <td>{numbers.death}</td>
      </tr>
    );
  }
  

  