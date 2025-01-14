import styles from "./styles.module.css";

type Props = {
  readonly value: string
}

export function Letter({ value = "" }: Props) {
  return (
    <div className={styles.letter}>
      <span>{value}</span>
    </div>
  )
}