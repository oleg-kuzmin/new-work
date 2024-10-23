import styles from './[FTName | pascalcase].module.scss';

interface <FTName | pascalcase>Props {
  className?: string;
}

export function <FTName | pascalcase>({ className }: Readonly<<FTName | pascalcase>Props>) {
  const externalClass = className ? ` ${className}` : '';

  return (
    <div className={styles.[FTName | pascalcase] + externalClass}>
      [FTName | pascalcase]
    </div>
  );
}