import styles from './[[FTName]].module.scss';

interface [[FTName]]Props {
  className?: string;
}

export default function [[FTName]]({ className }: Readonly<[[FTName]]Props>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.[[FTName]] + externalClass}>
      [[FTName]]
    </div>
  );
}
