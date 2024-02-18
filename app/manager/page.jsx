import Manager from "./component";
import Maintenance from "@/app/component/maintenance";
import { api } from "@/public/script/public";

export const metadata = {title: 'المدير العام'}

export default async function Page () {

    const response = await api('default', 'post');
    if ( !response.settings ) return <Maintenance />
    if ( !response.settings.active ) return <Maintenance />

    return <Manager settings={response.settings}/>

}
