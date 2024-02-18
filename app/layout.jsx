import "@/public/sass/main.scss";
import { api } from "@/public/script/public";

export const metadata = {title: {template: `%s | شركة طيبة الخير`}}

export default async function Layout({ children }) {

    const data = await api('default');

    if ( data.settings ) {
        metadata.title = {template: `%s | ${data.settings.name}`};
        metadata.description = data.settings.description || '';
        metadata.keywords = data.settings.keywords && data.settings.keywords.split(',');
        metadata.authors = [{name: data.settings.name, url: `https:web.whatsapp.com/send/?phone=${data.settings.phone}`}];
        metadata.creator = data.settings.name;
        metadata.generator = data.settings.name;
        metadata.applicationName = data.settings.name;
    }

    return (
        <html>
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <link rel="icon" href="/media/public/logo.png"/>
            </head>
            <body>
                {children}
            </body>
        </html>
    )

}
