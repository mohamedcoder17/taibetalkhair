import Blogs from "./component";
import Maintenance from "@/app/component/maintenance";
import { api } from "@/public/script/public";

export const metadata = {title: "اخر الأخبار"}

export default async function Page () {

    const response = await api('blogs', 'post');
    if ( !response.settings ) return <Maintenance />
    if ( !response.settings.active ) return <Maintenance />

    metadata.title = response.settings.name;
    return <Blogs data={response}/>

}
