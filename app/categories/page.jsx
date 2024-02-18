import Categories from "./component";
import Maintenance from "@/app/component/maintenance";
import { api } from "@/public/script/public";

export const metadata = {title: 'فروع الشركة'}

export default async function Page () {

    const response = await api('default', 'post');
    if ( !response.settings ) return <Maintenance />
    if ( !response.settings.active ) return <Maintenance />

    metadata.title = response.settings.name;
    return <Categories data={response}/>

}
