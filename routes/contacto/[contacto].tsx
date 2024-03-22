import {FreshContext, Handlers, PageProps} from "$fresh/server.ts";
import{contacto} from "../../types.ts";


export const handler: Handlers = {
    ADD: async (_req: Request, ctx: FreshContext<unknown, contacto[]>) => {
        const name = new contacto.name;
        const email = new contacto.email;
    }
}

const Page = (props: PageProps<contacto[]>) => {
    const data = props.data;
    return(
        <>
        {data.map((contacto))} => {
            <div>
                <h1>{contacto.name}</h1>
                <p>
                    contacto: <a href={`/contacto/${contacto.name}`}>{contacto.name}</a>
                </p>
                <p>name: {contacto.name}</p>
                <p>email: {contacto.email}</p>
            </div>
        }
        <a href="/">Volver</a>
        </>
    );
};
export default Page;