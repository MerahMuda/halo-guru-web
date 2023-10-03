import { Grid, Typography } from "@mui/material"

interface UserFormProps {
    data?: any,
}

const FormattedLabelValue = (props: {
    label: string
    defaultValue?: string
    children?: any,
    hideOnUndefined?: boolean
}) => {
    const { label, defaultValue = "-", children, hideOnUndefined = false } = props
    return children || !hideOnUndefined ? <Typography mt={2} fontSize={"sm"}>
        <b>{label}</b> : {`${children ?? ""}` || `${defaultValue}`}
    </Typography> : null
}
const UserDetail = (props: UserFormProps) => {
    const {
        data
    } = props

    return (
        <Grid container height="100%" style={{
            overflowY: "scroll"
        }} spacing={2}>
            <Grid item xs={6}>
                <FormattedLabelValue label="NIP/NUPTK">{data?.gtk?.nip_nuptk}</FormattedLabelValue>
                <FormattedLabelValue label="NAMA">{data?.nama}</FormattedLabelValue>
                <FormattedLabelValue label="EMAIL">{data?.email}</FormattedLabelValue>
                <FormattedLabelValue label="UNIT KERJA">{data?.gtk?.unit_kerja}</FormattedLabelValue>
                <FormattedLabelValue label="RIWAYAT PENDIDIKAN">{data?.gtk?.riwayat_pendidikan}</FormattedLabelValue>
                <FormattedLabelValue label="BIOGRAFI">{data?.biografi}</FormattedLabelValue>
            </Grid>
            <Grid item xs={6}>
                <FormattedLabelValue label="MEDIA PEMBELAJARAN">{data?.gtk?.media_pembelajaran}</FormattedLabelValue>
                <FormattedLabelValue label="PANGKAT">{data?.gtk?.pangkat}</FormattedLabelValue>
                <FormattedLabelValue label="GOLONGAN">{data?.gtk?.golongan}</FormattedLabelValue>
                <FormattedLabelValue label="JABATAN">{data?.gtk?.jabatan}</FormattedLabelValue>
                <FormattedLabelValue label="FOTO">{data?.gtk?.foto}</FormattedLabelValue>
            </Grid>
        </Grid>
    )
}

export default UserDetail;