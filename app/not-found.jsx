import Error from "@/app/component/error";
import Maintenance from "@/app/component/maintenance";
import { api } from "@/public/script/public";

export const metadata = {title: '404 - صفحة غير موجودة !'}

export default async function Page () {

    const response = await api('default');
    if ( !response.settings ) return <Maintenance />
    if ( !response.settings.active ) return <Maintenance />

    return <Error settings={response.settings}/>

}
