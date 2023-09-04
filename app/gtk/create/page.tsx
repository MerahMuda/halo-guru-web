import { Button, Grid, TextField } from "@mui/material";

const CreateGTK = () => {
    return (
        <>


            <Grid container height="80%" style={{
                overflowY: "scroll"
            }} spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="NIP/NUPTK"
                        name="nip_nuptk"
                        placeholder="NIP/NUPTK"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Nama"
                        name="nama"
                        placeholder="Nama"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Unit Kerja"
                        name="unit_kerja"
                        placeholder="Unit kerja"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Role"
                        name="role_id"
                        placeholder="NIP/NUPTK"
                    // change this into dropdown
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        variant="outlined"
                        label="Riwayat Pendidikan"
                        name="riwayat_pendidikan"
                        placeholder="Riwayat Pendidikan"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        variant="outlined"
                        label="Biografi"
                        name="biografi"
                        placeholder="Biografi"
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Mata Pelajaran"
                        name="mata_pelajaran"
                        placeholder="Mata Pelajaran"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Media Pembelejaran"
                        name="media_pelajaran"
                        placeholder="Media Pembelajaran"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Pangkat"
                        name="pangkat"
                        placeholder="Pangkat"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Golongan"
                        name="golongan"
                        placeholder="Golongan"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Jabatan"
                        name="jabatan"
                        placeholder="jabatan"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="foto"
                        name="foto"
                        placeholder="foto"
                    // gonna change this into input type upload
                    />
                </Grid>
            </Grid>
            <Grid container height="20%" justifyContent={"flex-end"}>
                <Grid item xs={2}>
                    <Button fullWidth variant="contained" sx={{
                        padding: 2
                    }}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default CreateGTK;