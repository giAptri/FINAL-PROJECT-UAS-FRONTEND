import { Section, Header, Title, Subtitle, TableWrapper, Table } from './Province.styled.jsx';
import { useContext } from 'react';
import CovidIDContext from '../../Context/index.jsx';
import Provinsi from './provinsiTd.jsx';



export default function Province() {
    const { ProvinsiData } = useContext(CovidIDContext);
    return (
        <Section>
            <Header>
                <Title>PROVINCE</Title>
                <Subtitle>Data Covid Berdasarkan Provinsi</Subtitle>
            </Header>
            <TableWrapper>
                <Table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Provinsi</th>
                            <th>Positif</th>
                            <th>Sembuh</th>
                            <th>Di Rawat</th>
                            <th>Meninggal</th>
                        </tr>
                    </thead>
                    <tbody>
                    {ProvinsiData.provinces.map((Province, No) => (
                    <Provinsi key={No} Province={Province} No={No} />
                    ))}
                    </tbody>
                </Table>
            </TableWrapper>
        </Section>
    );
}


