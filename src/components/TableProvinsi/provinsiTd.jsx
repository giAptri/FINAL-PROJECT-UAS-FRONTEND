export default function Provinsi({ Province, No }){

    return(
            <tr>
                <td>{No + 1}</td>
                <td>{Province.kota}</td>
                <td>{Province.kasus}</td>
                <td>{Province.sembuh}</td>
                <td>{Province.dirawat}</td>
                <td>{Province.meninggal}</td>
            </tr>
    );
}

