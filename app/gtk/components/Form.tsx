import { Button, FormControl, FormHelperText, FormLabel, Grid, TextField } from "@mui/material"
import Dropdown, { Option } from "components/Dropdown"
import useApi from "hooks/useAPI"
import { MutableRefObject } from "react"
import { GetRoles } from "services/Roles"

interface UserFormProps {
    formRef: MutableRefObject<HTMLFormElement>
    onSubmitForm(): void,
    data?: any,
    isEdit?: boolean
}

const optionsTransform = (roles: any[]): Option[] => {
    return roles.map((datum) => ({
        label: datum.nama, value: datum.id
    }))
}

const UserForm = (props: UserFormProps) => {
    const {
        formRef, onSubmitForm, data, isEdit
    } = props
    const Roles = useApi({
        fetching: true,
        api: () => GetRoles({
            page: 0, perPages: 100
        })
    })
    return (
        <form ref={formRef} style={{ overflow: "hidden" }}>
            <Grid container height="80%" style={{
                overflowY: "scroll"
            }} spacing={2}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <FormLabel> NIP/NUPTK</FormLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="nip_nuptk"
                            placeholder="ex: 01988548023480"
                            defaultValue={data?.gtk?.nip_nuptk}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <FormLabel> NAMA</FormLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="nama"
                            placeholder="Nama Lengkap GTK"
                            defaultValue={data?.nama}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <FormLabel> PASSWORD</FormLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="password"
                            type="password"
                            placeholder="**********"
                        />
                        {isEdit && <FormHelperText>Field ini jangan diisi apabila tidak akan merubah password</FormHelperText>}
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <FormLabel> EMAIL</FormLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="email"
                            type="email"
                            placeholder="user@user.com"
                            defaultValue={data?.email}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <FormLabel> UNIT KERJA</FormLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="unit_kerja"
                            placeholder="Unit kerja"
                            defaultValue={data?.gtk?.unit_kerja}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <FormLabel> ROLE</FormLabel>
                        <Dropdown options={optionsTransform(Roles.data)} name="roleId" onChange={() => { }} defaultValue={data?.roleId} />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <FormLabel> RIWAYAT PENDIDIKAN</FormLabel>
                        <TextField
                            fullWidth
                            multiline
                            rows={3}
                            variant="outlined"
                            name="riwayat_pendidikan"
                            placeholder="ex: Alumnus STKIP"
                            defaultValue={data?.gtk?.riwayat_pendidikan}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <FormLabel> BIOGRAFI</FormLabel>
                        <TextField
                            fullWidth
                            multiline
                            rows={3}
                            variant="outlined"
                            name="biografi"
                            placeholder="ex: Saya merupakan seorang guru di Sekolah ..."
                            defaultValue={data?.biografi}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <FormLabel> MEDIA PEMBELAJARAN</FormLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="media_pembelajaran"
                            placeholder="ex: Powerpoint"
                            defaultValue={data?.gtk?.media_pembelajaran}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <FormLabel> PANGKAT</FormLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="pangkat"
                            placeholder="Pangkat"
                            defaultValue={data?.gtk?.pangkat}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <FormLabel> GOLONGAN</FormLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="golongan"
                            placeholder="Golongan"
                            defaultValue={data?.gtk?.golongan}

                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <FormLabel> Jabatan</FormLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="jabatan"
                            placeholder="jabatan"
                            defaultValue={data?.gtk?.jabatan}

                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <FormLabel> FOTO</FormLabel>
                        <TextField
                            fullWidth
                            variant="outlined"
                            name="foto"
                            placeholder="foto"
                            defaultValue={data?.gtk?.foto}

                        // gonna change this into input type upload
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container height="20%" justifyContent={"flex-end"} mt={5}>
                <Grid item xs={2}>
                    <Button fullWidth variant="contained" sx={{
                        padding: 2
                    }}
                        onClick={onSubmitForm}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default UserForm;