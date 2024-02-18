import Home from "@/app/component/home";
import Maintenance from "@/app/component/maintenance";
import { api } from "@/public/script/public";

export const metadata = {title: 'شركة طيبة الخير'}

export default async function Page () {

    const response = await api('default', 'post');
    if ( !response.settings ) return <Maintenance />
    if ( !response.settings.active ) return <Maintenance />

    return <Home data={response}/>

}
