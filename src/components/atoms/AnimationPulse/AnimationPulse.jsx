import style from "./animationPulse.module.css";

export const AnimationPulse = () => {
  return (
    <div className={style.pulse__wrapp}>
      <div className={`${style.pulse} ${style.pulse_ring}`}></div>
      <div className={`${style.pulse} ${style.pulse_ring}`}></div>
      <div className={`${style.pulse} ${style.pulse_ring}`}></div>
      <div className={`${style.pulse} ${style.pulse_ring}`}></div>
    </div>
  );
};
