'use client'

import DialogAlert from "components/Dialog";
import useApi from "hooks/useAPI";
import WithAuth from "libs/WithAuth";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { GetGTKById, PatchGTK, PostGTK } from "services/GTK";
import UserForm from "../../components/Form";

const EditGTK = ({ params }) => {
    const formRef = useRef<HTMLFormElement>(null)
    const GTK = useApi({
        fetching: true,
        api: () => GetGTKById(params.id),
        apiPost: (data) => PatchGTK(params.id, data)
    })
    const [dataDialog, setDataDialog] = useState<any>();
    const [isOpen, setOpen] = useState<boolean>(false);
    const router = useRouter()
    const onSubmitForm = useCallback(() => {
        const formData = new FormData(formRef.current)
        const data: any = {}
        const gtk: any = {}
        formData.forEach((value, key) => {
            if (!value) return; // skip empty value
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
            <UserForm formRef={formRef} onSubmitForm={onSubmitForm} data={GTK.data} isEdit />
            <DialogAlert title="Create User" onSubmitClick={onDialogConfirm} open={isOpen} submitText="Kembali ke Daftar GTK" handleClose={() => setOpen(false)}>
                Berhasil update user dengan attribut:
                <br />
                NIP/NUPTK : <b>{dataDialog?.nip_nuptk}</b>
                <br />
                Nama : <b>{dataDialog?.nama}</b>
            </DialogAlert>
        </WithAuth>
    )
}

export default EditGTK;