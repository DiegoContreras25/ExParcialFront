import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  ADD: async (req: Request, ctx: FreshContext) => {
    new contacto = contacto.add(name, email);
    if(contacto){
      return new Response("", {
        status:307,
      });
    }
    return ctx.render;
  },
};

const Home = () => {
  return (
    <>
    <form method="add">
      Add new contact <input type="text" contacto="contacto" email="email" />
      <button type="Add contact">Los contactos</button>
    </form>
    </>
  );
};
export default Home;
