"use client";

import { useUpdateMyPresence } from "@liveblocks/react";

type Props = {
  setModalVisable: (visable: boolean) => void;
};

export function NameModal({ setModalVisable }: Props) {
  const updateMyPresence = useUpdateMyPresence();

  async function updateName(formData: FormData) {
    const name = (formData.get("name") as string) || "Player";
    updateMyPresence({ name });
    setModalVisable(false);
  }

  return (
    <form
      action={updateName}
      className="w-64 p-4 bg-zinc-800 rounded shadow flex flex-col"
    >
      <label className="flex flex-col text-center">
        Enter a name:
        <input
          type="text"
          name="name"
          className="mt-2 p-2 rounded bg-zinc-600"
        />
      </label>
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save
      </button>
    </form>
  );
}
