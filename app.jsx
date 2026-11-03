import { format } from "date-fns";

export default function App() {
  const time = format(new Date(), "dd/MM/yyyy HH:mm:ss");

  return (
    <div>
      <p>{time}</p>
    </div>
  );
}