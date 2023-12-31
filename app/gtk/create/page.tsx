'use client'

import { Button, FormControl, FormLabel, Grid, TextField } from "@mui/material";
import DialogAlert from "components/Dialog";
import Dropdown, { Option } from "components/Dropdown";
import useApi from "hooks/useAPI";
import WithAuth from "libs/WithAuth";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { PostGTK } from "services/GTK";
import { GetRoles } from "services/Roles";
import UserForm from "../components/Form";

const optionsTransform = (roles: any[]): Option[] => {
    return roles.map((datum) => ({
        label: datum.nama, value: datum.id
    }))
}

const CreateGTK = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const GTK = useApi({
        fetching: false,
        apiPost: (data) => PostGTK(data)
    })
    const [dataDialog, setDataDialog] = useState<any>();
    const [isOpen, setOpen] = useState<boolean>(false);
    const router = useRouter()
    const onSubmitForm = useCallback(() => {
        const formData = new FormData(formRef.current)
        const data: any = {}
        const gtk: any = {}
        formData.forEach((value, key) => {
            switch (key) {
                case 'nip_nuptk':
                case 'unit_kerja':
                case 'riwayat_pendidikan':
                case 'pangkat':
                case 'golongan':
                case 'jabatan':
                case 'media_pembelajaran':
                case 'status':
                    {
                        gtk[key] = value
                        break;
                    }
                default:
                    data[key] = value
            }
        })
        data.gtk = gtk
        setDataDialog({ ...data, ...gtk })
        GTK.post(data)
        if (!GTK.error) setOpen(true);
    }, [formRef.current])

    const onDialogConfirm = () => router.push("/gtk");

    return (
        <WithAuth>
            <UserForm formRef={formRef} onSubmitForm={onSubmitForm} />
            <DialogAlert title="Create User" onSubmitClick={onDialogConfirm} open={isOpen} submitText="Kembali ke Daftar GTK" handleClose={() => setOpen(false)}>
                Berhasil membuat user dengan attribut:
                <br />
                NIP/NUPTK : <b>{dataDialog?.nip_nuptk}</b>
                <br />
                Nama : <b>{dataDialog?.nama}</b>
            </DialogAlert>
        </WithAuth>
    )
}

export default CreateGTK;