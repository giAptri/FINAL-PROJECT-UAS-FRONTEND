import { Section, Header, Title, Subtitle, TableWrapper, Table } from './Province.styled.jsx';
import Provinsi from './provinsiTdApi.jsx';


export default function Province({ CardsRegion }) {
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
                    {CardsRegion.map((konteens, No) => (
                    <Provinsi key={No} konteens={konteens} No={No} />
                    ))}
                    </tbody>
                </Table>
            </TableWrapper>
        </Section>
    );
}

