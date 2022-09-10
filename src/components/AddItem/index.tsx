import { useState } from "react";
import { Item } from "../../interfaces/Item";

interface Props {
  addItem: (item: Item) => void;
}

export function AddItem({ addItem }: Props) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState(-1);

  const handleItemSubmit = () => {
    if (task !== "" && priority !== -1) {
      addItem({ task, priority });
      setTask("");
      setPriority(-1);
    }
  };

  return (
    <table>
      <tbody>
        <tr key="">
          <td>Task:</td>
          <td>
            <input
              id="task"
              value={task}
              type="text"
              placeholder="Enter task here"
              onChange={(event) => setTask(event.target.value)}
            />
          </td>
          <td>Priority:</td>
          <td>
            <input
              id="priority"
              value={priority}
              type="text"
              placeholder="Enter priority here"
              onChange={(event) =>
                setPriority(parseInt(event.target.value) || 0)
              }
            />
          </td>
          <td>
            <input id="submit" type="submit" onClick={handleItemSubmit} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
