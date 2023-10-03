'use client'

import DialogAlert from "components/Dialog";
import useApi from "hooks/useAPI";
import WithAuth from "libs/WithAuth";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { GetGTKById, PatchGTK, PostGTK } from "services/GTK";
import UserForm from "../../components/Form";
import UserDetail from "app/gtk/components/Detail";

const EditGTK = ({ params }) => {
    const GTK = useApi({
        fetching: true,
        api: () => GetGTKById(params.id),
        apiPost: (data) => PatchGTK(params.id, data)
    })
    return (
        <WithAuth>
            <UserDetail data={GTK.data} />
        </WithAuth>
    )
}

export default EditGTK;