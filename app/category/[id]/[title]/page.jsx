import Category from "./component";
import Maintenance from "@/app/component/maintenance";
import { api } from "@/public/script/public";

export const metadata = {}

export default async function Page ({ params }) {

    const response = await api('category', {id: params.id});
    if ( !response.settings ) return <Maintenance />
    if ( !response.settings.active ) return <Maintenance />

    metadata.title = response.data.name;
    return <Category data={response}/>

}
