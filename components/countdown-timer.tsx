import confetti from "canvas-confetti";
import Countdown from "react-countdown";
import TimeBox from "./time-box";
import { useState } from "react";

interface Props {
  date: Date;
}

export default function CountdownTimer({ date }: Props) {
  const [isCompleted, setIsCompleted] = useState(false);

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return (
        <span className="font-poppins text-xl font-bold text-foreground">
          Acara pernikahan sudah dimulai!🎉
        </span>
      );
    } else {
      return (
        <div className="flex space-x-2">
          <TimeBox
            label="Hari"
            value={days}
          />
          <TimeBox
            label="Jam"
            value={hours}
          />
          <TimeBox
            label="Menit"
            value={minutes}
          />
          <TimeBox
            label="Detik"
            value={seconds}
          />
        </div>
      );
    }
  };

  const handleComplete = () => {
    setIsCompleted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      {!isCompleted && (
        <p className="font-niconne text-3xl text-foreground">
          Menuju hari yang berbahagia!🎉
        </p>
      )}
      <Countdown
        date={date}
        renderer={renderer}
        onComplete={handleComplete}
      />
    </div>
  );
}
