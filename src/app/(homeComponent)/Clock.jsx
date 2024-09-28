import { useEffect, useRef } from "react";
import "./Clock.css";

function Clock() {
    const secondsRef = useRef(null);
    const minutesRef = useRef(null);
    const hoursRef = useRef(null);

    useEffect(() => {
        function setTime() {
            const now = new Date();

            const seconds = now.getSeconds();
            const secondsDegrees = (seconds / 60) * 360 + 90;
            if (secondsRef.current) {
                secondsRef.current.style.transform = `rotate(${secondsDegrees}deg)`;
            }

            const minutes = now.getMinutes();
            const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
            if (minutesRef.current) {
                minutesRef.current.style.transform = `rotate(${minutesDegrees}deg)`;
            }

            const hours = now.getHours();
            const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
            if (hoursRef.current) {
                hoursRef.current.style.transform = `rotate(${hoursDegrees}deg)`;
            }
        }

        const intervalId = setInterval(setTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <main>
            <section>
                <span ref={secondsRef} className="hand second-hand"></span>
                <span ref={minutesRef} className="hand minute-hand"></span>
                <span ref={hoursRef} className="hand hour-hand"></span>
            </section>
        </main>
    );
}

export default Clock;
