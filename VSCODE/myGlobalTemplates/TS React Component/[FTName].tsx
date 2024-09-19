import styles from './[FTName].module.scss';

interface <FTName>Props {
  readonly className?: string;
}

export default function [FTName]({ className }: <FTName>Props) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.[FTName] + externalClass}>
      [FTName]
    </div>
  );
}
