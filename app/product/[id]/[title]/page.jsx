import Product from "./component";
import Maintenance from "@/app/component/maintenance";
import { api } from "@/public/script/public";
import { redirect } from "next/navigation";

export const metadata = {}

export default async function Page ({ params }) {

    const response = await api('product', {id: params.id});
    if ( !response.settings ) return <Maintenance />
    if ( !response.settings.active ) return <Maintenance />
    if ( !response.data ) redirect('/');

    metadata.title = response.data.name;
    return <Product data={response}/>

}
