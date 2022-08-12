import React from "react";

type Props = {
  priority?: string | undefined;
  taskName: string;
};

const Task = (props: Props) => {
  const getPriorityStyle = (level: string | undefined) => {
    switch (level) {
      case "highest": {
        return { badgeStyle: "bg-red-500 text-white", border: "border-white" };
      }
      case "high": {
        return { badgeStyle: "bg-orange-500 text-white", border: "border-white" };
      }
      case "middle": {
        return { badgeStyle: "bg-yellow-400 text-gray-700", border: "border-gray-700" };
      }
      case "low": {
        return { badgeStyle: "bg-green-400 text-white", border: "border-white" };
      }
      case "lowest": {
        return { badgeStyle: "bg-blue-500 text-white", border: "border-white" };
      }
      default: {
        return {
          badgeStyle: "bg-gray-50 border-gray-700 border text-gray-700",
          border: "border-gray-700",
        };
      }
    }
  };

  const taskStyle = getPriorityStyle(props.priority);

  return (
    <div
      className={`w-full flex items-center rounded-full space-x-1 px-1 my-1 ${taskStyle.badgeStyle}`}
    >
      <div className={`w-3 h-3 border rounded-full ${taskStyle.border}`} />
      <p className="w-full text-ellipsis overflow-hidden whitespace-nowrap font-bold text-sm">
        {props.taskName}
      </p>
    </div>
  );
};

export default Task;
