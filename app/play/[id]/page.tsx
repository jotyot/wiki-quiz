import { Room } from "@/app/play/[id]/room";
import { Game } from "@/app/play/[id]/game";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  return (
    <Room id={id}>
      {id}
      <Game />
    </Room>
  );
}
