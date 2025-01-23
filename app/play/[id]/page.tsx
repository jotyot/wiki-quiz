import { Room } from "@/app/room";
import { Game } from "@/app/ui/game";

export default function Page(props: { params: { id: string } }) {
  return (
    <Room id={props.params.id}>
      {props.params.id}
      <Game />
    </Room>
  );
}
