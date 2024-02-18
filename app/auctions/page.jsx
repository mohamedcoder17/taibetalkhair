import Auctions from "./component";
import Maintenance from "@/app/component/maintenance";
import { api } from "@/public/script/public";

export const metadata = {title: 'المزادات'}

export default async function Page () {

    const response = await api('auctions', 'post');
    if ( !response.settings ) return <Maintenance />
    if ( !response.settings.active ) return <Maintenance />

    return <Auctions data={response}/>

}
