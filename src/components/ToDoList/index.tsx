import { CSSProperties } from "react";
import { Item } from "../../interfaces/Item";

interface Props {
  items: Item[];
}

const tableStyles: CSSProperties = {
  width: "100%",
  fontFamily: "arial, sans-serif",
  borderCollapse: "collapse",
  textAlign: "left",
  padding: 8,
  border: "1px solid #dddddd",
};

export function ToDoList({ items }: Props) {
  return items.length === 0 ? (
    <div>Empty list!</div>
  ) : (
    <table style={tableStyles}>
      <thead key="task_prioirity">
        <th>Task</th>
        <th>Priority</th>
      </thead>
      <tbody>
        {items
          .sort((first, second) => first.priority - second.priority)
          .map((item, index) => (
            <tr
              key={`${item.task}_${item.priority}`}
              style={{ backgroundColor: index % 2 === 0 ? "#dddddd" : "white" }}
            >
              <td>{item.task}</td>
              <td>{item.priority}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
