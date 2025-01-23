import { Room } from "@/app/room";
import { Game } from "@/app/ui/game";

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
