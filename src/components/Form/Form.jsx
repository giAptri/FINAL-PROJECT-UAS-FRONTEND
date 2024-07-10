import { useContext, useState } from 'react';
import {
    Container,
    ImageContainer,
    Image,
    FormContainer,
    Title,
    Form,
    Label,
    Select,
    Input,
    Button
} from './Form.styled';
import CovidIDContext from '../../Context';


export default function FormCovid() {
    const { ProvinsiData, SetProvinsi } = useContext(CovidIDContext);
    const [province, setProvince] = useState('');
    const [status, setStatus] = useState('');
    const [jumlah, setJumlah] = useState(0);

    function submitHandler(event) {
        event.preventDefault();

        const newProvinceData = { ...ProvinsiData };
        const provIndex = newProvinceData.provinces.findIndex(p => p.kota.toLowerCase() === province.toLowerCase());

        if (provIndex !== -1) {
            newProvinceData.provinces[provIndex][status] += jumlah;
            SetProvinsi(newProvinceData);
        } else {
            alert('Provinsi tidak ditemukan');
        }
    }

    return (
        <Container>
            <ImageContainer>
                <Image src="/img/Image.svg" alt="COVID-19" />
            </ImageContainer>
            <FormContainer>
                <Title>FORM COVID</Title>
                <Form onSubmit={submitHandler}>
                    <Label htmlFor="provinsi">Provinsi</Label>
                    <Input
                        type="text"
                        id="provinsi"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        required
                    />

                    <Label htmlFor="status">Status</Label>
                    <Select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <option value="">Pilih Status</option>
                        <option value="kasus">Kasus</option>
                        <option value="sembuh">Sembuh</option>
                        <option value="meninggal">Meninggal</option>
                        <option value="dirawat">Dirawat</option>
                    </Select>

                    <Label htmlFor="jumlah">Jumlah</Label>
                    <Input
                        type="number"
                        id="jumlah"
                        value={jumlah}
                        onChange={(e) => setJumlah(parseInt(e.target.value))}
                        required
                    />

                    <Button type="submit">Submit</Button>
                </Form>
            </FormContainer>
        </Container>
    );
}
